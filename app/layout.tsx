import "../styles/globals.css";

type LayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
