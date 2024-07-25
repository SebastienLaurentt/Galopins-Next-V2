import AccountHeader from "@/components/AccountComponent/AccountHeader";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <AccountHeader />
      <div className="flex-1">{children} </div>
    </div>
  );
}
