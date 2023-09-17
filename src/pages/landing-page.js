import ContainerFooter1 from "../components/container-footer1";
import NewsAndUpdatesContainer from "../components/news-and-updates-container";
import TournamentsContainer from "../components/tournaments-container";
import LastMatchesContainer from "../components/last-matches-container";
import StreamingContainer from "../components/streaming-container";
import ContainerCardForm from "../components/container-card-form";
import Header from "../components/header";

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-gray-300 w-full h-auto overflow-hidden text-left text-[5rem] text-white font-play">
      <Header />
      
      <div className="w-full h-[91vh] flex flex-col items-start justify-center bg-[url('/public/hero-section@3x.png')] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col items-start">
          <b className="text-center text-[2.7rem] uppercase p-4">
            Epic games made for
          </b>
          <b className="text-center text-[4rem] lg:text-[8rem] uppercase text-springgreen-100">
            True Gamers
          </b>
        </div>
        <div className="mx-[1rem] md:mx-[8rem] flex flex-col md:flex-row items-center justify-center gap-5 mt-4 text-[1.5rem] md:text-[2.25rem] text-black font-inter">
          <b className="text-center flex items-center justify-center bg-gray-500 px-3 py-3 rounded-lg">
            Know About Us
          </b>
          <img
            className=" mt-4 md:mt-0 rounded-full h-auto overflow-hidden"
            alt=""
            src="/play-button.svg"
          />
        </div>
      </div>


      <div className="w-full flex flex-col items-center justify-start gap-[1rem]">
        <NewsAndUpdatesContainer />
        <div className="w-full mx-auto bg-cover bg-no-repeat bg-top">
          <b className="text-center flex items-center justify-center md:text-[4rem] text-[2rem] uppercase p-4">
            Upcoming Tournaments
          </b>
          <TournamentsContainer />
          <div className="hidden sm:flex sm:items-start sm:justify-center sm:gap-[1rem] sm:p-4">
            <div className="bg-gray-100 w-1/12 h-1" />
            <div className="bg-springgreen-100 w-1/12 h-1" />
            <div className="bg-gray-100 w-1/12 h-1" />
            <div className="bg-gray-100 w-1/12 h-1" />
            <div className="bg-gray-100 w-1/12 h-1" />
          </div>
          <div className="w-full">
            <LastMatchesContainer />
          </div>
        </div>
        <StreamingContainer />
        <ContainerCardForm />
      </div>
      
      <ContainerFooter1 />
    </div>
  );
};

export default LandingPage;
