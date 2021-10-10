import { Layout } from "../components/layout"
import { Nav } from "../components/nav"
import { Home } from "../components/home";
import { Services } from "../components/services";
import { News } from "../components/news";
import { Prices } from "../components/prices";
import { Contact } from "../components/contact";
import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `{
  allHomes {
    heading
    headingCopy1
  }
  allServices {
    titre
    paragraphe
    titreCopy1
    paragrapheCopy1
    titreCopy2
    paragrapheCopy2
    titreCopy3
    paragrapheCopy3
    titreCopy4
    paragrapheCopy4
    titreCopy5
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data }
  };
}

const Index = ({ data }) => {
  const { allHomes, allServices } = data
  return (
    <Layout>
      <Nav />
      <Home data={allHomes[0]} />
      <Services data={allServices[0]} />
      <News />
      <Prices />
      <Contact />
    </Layout>
  )
}

export default Index
