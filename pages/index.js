import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
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
    image{
      url
      alt
    }
    titreCopy1
    paragrapheCopy1
    imageCopy1{
      url
      alt
    }
    titreCopy2
    paragrapheCopy2
    imageCopy2{
      url
      alt
    }
    titreCopy3
    paragrapheCopy3
    imageCopy3{
      url
      alt
    }
    titreCopy4
    paragrapheCopy4
    imageCopy4{
      url
      alt
    }
    titreCopy5
  }
  allNews {
    titre
    accroche
    lienDuRSeauSocial
    icone{
      url
    }
    lienDuRSeauSocialCopy1
    iconeCopy1{
      url
    }
    imagesDeLaGalerie{
      responsiveImage{
        src
        srcSet
      }
    }
  }
  allPrixes{
    order
    suggR
    descriptionDeTarif
    tarif
    titreDeTarif
  }
  allContacts{
    titre
    infosDeContact
    paragraphe
    dTails
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

const Index = ({ data }) => {
  const { allHomes, allServices, allNews, allPrixes, allContacts } = data;
  return (
    <Layout>
      <Nav />
      <Home data={allHomes[0]} />
      <Services data={allServices[0]} />
      <News data={allNews[0]} />
      <Prices data={allPrixes} />
      <Contact data={allContacts[0]} />
    </Layout>
  );
};

export default Index;
