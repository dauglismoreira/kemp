import './styles.css';

interface BannerSectionProps{
  bg?:string;
  text:string;
}

export const BannerSection = ({text, bg}: BannerSectionProps) => {
  return(
    <>
      <span className="h-56 w-px bg-softBlue mx-auto -mb-28 block relative mt-20 lg:mt-0"></span>
      <div className="banner" style={{backgroundImage:'url("' + (bg ? bg : '') + '")'}}>
        <span></span>
        <h2>{text}</h2>
      </div>
    </>
  )
}