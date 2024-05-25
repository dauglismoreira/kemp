import { HighCard } from '../highCard';
import { SectionTitle } from '../sectionTitle';
import './styles.css';

export const PrimarySection = () => {

  return(
    <section id='primary' className="section">
      <div className="container">
        <SectionTitle text={'Lançamento'}/>
        <div className="content">
          <HighCard/>
        </div>
      </div>
    </section>
  )
}