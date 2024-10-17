import Banner from '../../components/Banner';

//import pdfResume from '/public/pdfs/jake_lee.pdf';

function CV() {
  return (
    <div >
      <Banner />
      <main height="100%">
        <h1>Jake Lee's Resume</h1>
        <iframe
          border="none"
          display="block"
          frameBorder="0"
          height="100%"
          overflow-y="auto"
          overflow-x="hidden"
          width="100%"
          src="pdfs/jake_lee.pdf"
        />
      </main>
    </div>
  );
}

export default CV;
