import type { Metadata } from "next"
import LoginClient from "./LoginClient"

export const metadata: Metadata = {
  title: "SPEAR Login | StrykeFox Medical",
  description: "Secure operator access for SPEAR Execution Intelligence.",
}

export default function LoginPage() {
  return <LoginClient />
}
