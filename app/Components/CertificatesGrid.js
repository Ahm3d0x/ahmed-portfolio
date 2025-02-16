import CertificateCard from "./CertificateCard";
const certificates = [
    {
      id: "04BE1A711041",
      field: "CSS (Basic)",
      issuer: "HackerRank",
      date: "24 May, 2024",
      description: "Certification of accomplishment for passing the CSS (Basic) skill test on HackerRank.",
      link: "https://www.hackerrank.com/certificates/04be1a711041",
      image: "HackerRank-CSS.png"
    },
    {
      id: "745A9BE96FB6",
      field: "JavaScript (Basic)",
      issuer: "HackerRank",
      date: "24 May, 2024",
      description: "Certification of accomplishment for passing the JavaScript (Basic) skill test on HackerRank.",
      link: "https://www.hackerrank.com/certificates/745a9be96fb6",
      image: "HackerRank-JS.png"
    },
    {
      id: "77684F18F25B",
      field: "Python (Basic)",
      issuer: "HackerRank",
      date: "24 May, 2024",
      description: "Certification of accomplishment for passing the Python (Basic) skill test on HackerRank.",
      link: "https://www.hackerrank.com/certificates/77684f18f25b",
      image: "HackerRank PY.png"
    },
    {
      id: "552482152AB2",
      field: "Node (Basic)",
      issuer: "HackerRank",
      date: "06 Jun, 2024",
      description: "Certification of accomplishment for passing the Node (Basic) skill test on HackerRank.",
      link: "https://www.hackerrank.com/certificates/552482152ab2",
      image: "HackerRank NODE JS.png"
    },
    {
      id: "CT-6O8TZVNM",
      field: "CSS",
      issuer: "SoloLearn",
      date: "30 Sep, 2021",
      description: "Certificate for successfully completing the CSS course on SoloLearn.",
      link: "https://api2.sololearn.com/v2/certificates/CT-6O8TZVNM/image/png?t=0",
      image: "SoloLearn CSS.png"
    },
    {
      id: "CT-HVO8JL5L",
      field: "HTML",
      issuer: "SoloLearn",
      date: "29 Sep, 2021",
      description: "Certificate for successfully completing the HTML course on SoloLearn.",
      link: "https://api2.sololearn.com/v2/certificates/CT-HVO8JL5L/image/png?t=638614276821351110",
      image: "SoloLearn HTML.png"
    },
    {
      id: "CC-BHVCLT1O",
      field: "JavaScript",
      issuer: "SoloLearn",
      date: "11 Jan, 2024",
      description: "Certificate for successfully completing the JavaScript course on SoloLearn.",
      link: "https://api2.sololearn.com/v2/certificates/CC-BHVCLT1O/image/png?t=638614277346674470",
      image: "SoloLearn JS.png"
    },
    {
      id: "CC-AC7CMT5A",
      field: "Write with AI",
      issuer: "SoloLearn",
      date: "24 Dec, 2024",
      description: "Certificate for successfully completing the Write with AI course on SoloLearn.",
      link: "https://api2.sololearn.com/v2/certificates/CC-AC7CMT5A/image/png?t=638706725368077130",
      image: "SoloLearn AI.png"
    },
    {
      id: "CC-XOKUNJZO",
      field: "Python Intermediate",
      issuer: "SoloLearn",
      date: "24 Dec, 2024",
      description: "Certificate for successfully completing the Python Intermediate course on SoloLearn.",
      link: "https://api2.sololearn.com/v2/certificates/CC-XOKUNJZO/image/png?t=638706751148442380",
      image: "SoloLearn PY.png"
    }
  ];
  
export default function CertificatesGrid() {
  return (
    <section className="py-12  col-span-2 bg-teal-950 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl text-center bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent font-bold mb-10"> My Certificates</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
