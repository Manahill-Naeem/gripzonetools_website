import Image from "next/image";

export default function Page() {
  return (
    <main className="container">
      <div className="card">
        <div className="logoWrap">
          <Image
            src="/gripzone.png"
            alt="GripZone Tools logo"
            width={240}
            height={120}
            priority
          />
        </div>
        <h1>Website is upgrading</h1>
        <p>
          We are preparing a better experience for mechanical engineers and industrial
          tooling buyers. Please check back soon.
        </p>
        <p className="sub">For inquiries: salesatgripzone@gmail.com</p>
      </div>
      <footer>
        © {new Date().getFullYear()} GripZone Tools
      </footer>
    </main>
  );
}


