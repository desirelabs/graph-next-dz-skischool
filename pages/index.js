import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { Foot } from "../components/footer";
import { Home } from "../components/home";
import { Services } from "../components/services";
import { News } from "../components/news";
import { Prices } from "../components/prices";
import { Contact } from "../components/contact";
import { request } from "../lib/datocms";

export async function getServerSideProps() {
  const HOMEPAGE_QUERY = `{
  _site {
    favicon{
      url
    }
    faviconMetaTags{
      attributes
      content
      tag
    }
    globalSeo{
      siteName
      fallbackSeo{
        description
        image {
          url
        }
        title
      }
    }
  }
  allHomes {
    heading
    headingCopy1
    accroche
  }
  allServices {
    accroche
    titreDeSection
    additionnalImage{
      url
      alt
    }
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
    titreDeSection
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
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

const Index = ({ data }) => {
  const { _site, allHomes, allServices, allNews, allPrixes, allContacts } =
    data;

  return (
    <>
      <Layout>
        <Nav logo={_site.faviconMetaTags} />
        <Home data={allHomes[0]} />
        <Services data={allServices[0]} />
        <News data={allNews[0]} />
        <Prices data={allPrixes} />
        <Contact data={allContacts[0]} />
        <Foot />
      </Layout>
    </>
  );
};

export default Index;
