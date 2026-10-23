# Japanese Public Holidays

> Every public holiday in Japan since 1955, from Business Box (marubox.jp): English and Japanese names and the kind of holiday (national, substitute, citizens or special), edited from the Cabinet Office&#39;s official list. Static JSON files, no key, no sign-up, served with Access-Control-Allow-Origin: *. Credit is required: &quot;Source: Cabinet Office, Government of Japan. Edited by Business Box (marubox.jp)&quot;; cache the files rather than fetching on every request.
>
> Sources: the documentation page https://marubox.jp/holidays/, with both JSON files probed live on 2026-10-23 (all years, 2026, 1955, and 2030). On that date the data ran from 1955 to 2027 (1,067 holidays) and was last updated 2026-09-29.
>
> Not modelled: the CSV (jp.csv) and iCalendar (jp.ics, jp-ja.ics) forms of the same data. A year outside the data (for example 2030) does not 404: the site answers HTTP 200 with an HTML page, so only years present in the data are valid.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 2 entities and 2 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Jpn

Results: All holidays.

SDK operations: `list`.

Key fields to recognise:

- `date`: Date in Japan time, YYYY-MM-DD.
- `kind`: national, substitute, citizens or special.
- `weekday`: English three-letter weekday.

### Year

Results: The year&#39;s holidays.

SDK operations: `list`.

Key fields to recognise:

- `date`: Date in Japan time, YYYY-MM-DD.
- `kind`: national, substitute, citizens or special.
- `weekday`: English three-letter weekday.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Jpn | `list` | `GET /jp.json` | See reference |
| Year | `list` | `GET /jp/{year}.json` | See reference |

## Connect to the API

- API server: `https://marubox.jp/holidays`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `japanese-public-holidays_list`: List records for an entity. Supported entities: `jpn`, `year`.
- `japanese-public-holidays_load`: Load one record for an entity. No active entity supports this operation.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

