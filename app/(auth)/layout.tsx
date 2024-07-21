export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center">{children} </div>
    </div>
  );
}
