export default function ApiDocsPage() {
  const apis = [
    {
      method: "GET",
      path: "/api/notes",
      description: "Fetch all notes from the database",
    },
    {
      method: "POST",
      path: "/api/notes",
      description: "Create a new note (requires API_KEY)",
      body: {
        title: "string",
        content: "string",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-10 px-6 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-indigo-600">foryou API Docs</h1>
        <p className="text-lg text-gray-600">
          Use the following endpoints to interact with the backend.  
          Secure routes require an API key sent in the header <code className="bg-gray-100 px-2 py-1 rounded">x-api-key</code>.
        </p>

        <section className="space-y-6">
          {apis.map((api) => (
            <div
              key={api.path}
              className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-sm font-semibold ${
                    api.method === "GET"
                      ? "text-green-600"
                      : api.method === "POST"
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {api.method}
                </span>
                <code className="text-sm font-mono text-gray-800">{api.path}</code>
              </div>
              <p className="text-gray-600 mb-2">{api.description}</p>

              {api.body && (
                <div className="mt-3 text-sm text-gray-700">
                  <p className="font-medium mb-1">Request Body:</p>
                  <pre className="bg-gray-50 rounded-md p-3 text-xs text-gray-700 border border-gray-200">
                    {JSON.stringify(api.body, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </section>

        <footer className="pt-6 border-t text-sm text-gray-500">
          Authentication: API Key  
          <br />
          Header: <code className="bg-gray-100 px-2 py-1 rounded">x-api-key: YOUR_SECRET_KEY</code>
        </footer>
      </div>
    </main>
  );
}
