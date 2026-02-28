// https://vike.dev/onRenderClient
import type { PageContextClient } from "vike/types"
import { hydrate } from "kiru/ssr/client"
import type { AppHandle } from "kiru"
import { getTitle } from "./utils"
import { App } from "./App"

let app: AppHandle | undefined

export const onRenderClient = (pageContext: PageContextClient) => {
  const container = document.getElementById("page-root")!

  if (pageContext.isHydration || !app) {
    app = hydrate(<App pageContext={pageContext} />, container)
    return
  }

  document.title = getTitle(pageContext)
  app.render(<App pageContext={pageContext} />)
}
