import { Header } from "@/src/components/Header"

export default async function RSLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <div className="mx-auto w-full max-w-7xl">
            <Header />
            <div className="px-4 -y-2">
                {children}
            </div>
        </div>
    )
}
