import './Avvisi.css';
import arrowBlue from '../../assests/arrow-blue.svg';
import infoLogo from '../../assests/bell.svg';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

function Avvisi() {

  const avvisi = [
    {
      'id' : 1,
      'heading' : 'Sed ut perspiciatis unde omnis iste',
      'content' : 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
      'date' : '20/12/2019'
    },
    {
      'id' : 2,
      'heading' : 'Lorem ipsum dolor sit amet',
      'content' : 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
      'date' : '20/12/2020'
    },
    {
      'id' : 3,
      'heading' : 'But I must explain to you how all this mistaken',
      'content' : 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. ',
      'date' : '11/12/2020'
    }
  ]

  return(
    <> 
      <div className="container">
        <h2 className="title-avvisi title title-blue">
          <div className="title-avvisi__left">
            <img src={infoLogo} alt="Avvisi Logo" />
            Avvisi
          </div>
          <span className="title-orange">Vedi tutti</span>
        </h2>
        <Accordion allowZeroExpanded>
          {avvisi.map((item) => (
            <AccordionItem 
              key={item.id} 
            >
              <AccordionItemHeading>
                  <AccordionItemButton>
                      <h3>{item.heading}</h3>
                      <span>{item.date}</span>
                      <img src={arrowBlue} alt="arrow" />
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {item.content}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  ); 
}

export default Avvisi;