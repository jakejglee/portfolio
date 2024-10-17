import Banner from '../../components/Banner';

//import pdfResume from '/public/pdfs/jake_lee.pdf';

function CV() {
  return (
    <div >
      <Banner />
      <main>
        <h1>Jake Lee's Resume</h1>
        <div className={global.container}>
          <iframe
            width="100%"
            src="pdfs/fall2024-cv-jake_lee.pdf"
          />
        </div>
        <h1>Jake Lee's Transcript</h1>
        <div className={global.container}>
          <iframe
            width="100%"
            src="pdfs/fall2024-transcript-jake_lee.pdf"
          />
        </div>
      </main>
    </div>
  );
}

export default CV;
