
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>LV2</p>
      <hr/>
        <body >{children}</body>
      <hr/>
      <p>LV2</p>
    </div>
  );
}
