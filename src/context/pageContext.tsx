import type { PageContext as VikePageContext } from "vike/types"
import { createContext, useContext } from "kiru"

export const PageContext = createContext<VikePageContext>(null as any)

export function usePageContext() {
  return useContext(PageContext)
}
