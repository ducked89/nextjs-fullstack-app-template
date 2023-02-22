import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Layout example (About)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sequi eaque
        illo similique veritatis odit explicabo vel id libero, hic corrupti
        eius, corporis ducimus provident autem. Eos mollitia animi ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam
        sapiente adipisci repudiandae atque culpa unde. Eius quos provident
        optio id unde, dolorum similique tenetur nesciunt magnam eos esse dolor.
      </p>
      <h3>Try It Out</h3>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
