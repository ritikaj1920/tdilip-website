import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/atoms/seo';
import { blogArticles } from '../../data/helpingHands';
import blogArticleContent from '../../data/blogContent';
import styles from './blog-detail.module.css';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);
  const paragraphs = slug ? blogArticleContent[slug] : undefined;

  const seoDescription = paragraphs
    ? paragraphs[0].slice(0, 155) + '...'
    : article?.excerpt ?? '';

  if (!article || !paragraphs) {
    return (
      <section className={`section ${styles.notFound}`}>
        <div className="container">
          <h2 className={styles.notFoundTitle}>Article Not Found</h2>
          <p className={styles.notFoundText}>
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link to="/helping-hands" className={styles.backLink}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Stories
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={article.title}
        path={`/helping-hands/${slug}`}
        description={seoDescription}
        image={article.image}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': article.title,
          'image': article.image,
          'datePublished': article.date,
          'author': { '@type': 'Person', 'name': 'T. Dilip' },
          'publisher': { '@type': 'Person', 'name': 'T. Dilip' },
          'description': seoDescription,
        }}
      />
      <div className={styles.heroWrap}>
        <img
          src={article.image}
          alt={article.title}
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
      </div>

      <section className={`section ${styles.articleSection}`}>
        <div className="container">
          <motion.div
            className={styles.articleInner}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className={styles.breadcrumb}>
              <Link to="/helping-hands" className={styles.breadLink}>
                Helping Hands
              </Link>
              <span className={styles.breadSep}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
              <span className={styles.breadCurrent}>Article</span>
            </nav>

            <span className={styles.articleDate}>{article.date}</span>
            <h1 className={styles.articleTitle}>{article.title}</h1>

            <div className={styles.articleDivider}>
              <span />
            </div>

            <div className={styles.articleBody}>
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className={styles.articleFooter}>
              <Link to="/helping-hands" className={styles.backLink}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                Back to Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
