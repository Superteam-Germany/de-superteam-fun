
export default function StudioLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}
