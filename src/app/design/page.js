import "./design.css";

export default function DesignPage() {
  return (
    <main className="designPage" lang="en">
      <iframe
        src="/design/index.html"
        title="Visual Craft"
        aria-description="A creative playground for digital art, interfaces, and visual experiments."
        style={{
          width: "100%",
          height: "100vh",
          border: "none"
        }}
      />
    </main>
  );
}