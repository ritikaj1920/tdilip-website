import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/atoms/seo';
import PageHero from '../../components/molecules/page-hero';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './submit-video.module.css';

const steps = [
  { num: '01', title: 'Record Your Video', desc: 'Capture your batting, bowling, or fielding practice in good lighting with a steady camera.' },
  { num: '02', title: 'Fill the Form', desc: 'Provide your details and describe what you\u2019d like feedback on \u2014 technique, positioning, or strategy.' },
  { num: '03', title: 'Get Expert Analysis', desc: 'Receive personalized coaching insights and improvement suggestions from the team.' },
];

interface FormData {
  name: string;
  email: string;
  skill: string;
  videoLink: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  skill?: string;
  videoLink?: string;
  description?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Full name is required';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.skill) {
    errors.skill = 'Please select a skill type';
  }

  if (!data.videoLink.trim()) {
    errors.videoLink = 'Video link is required';
  } else if (!/^https?:\/\/.+/.test(data.videoLink)) {
    errors.videoLink = 'Please enter a valid URL (starting with http:// or https://)';
  }

  if (!data.description.trim()) {
    errors.description = 'Please describe what you\'d like feedback on';
  }

  return errors;
}

const skillOptions = [
  { value: 'batting', label: 'Batting' },
  { value: 'bowling', label: 'Bowling' },
  { value: 'fielding', label: 'Fielding' },
  { value: 'keeping', label: 'Wicket-keeping' },
];

function CustomSelect({
  value,
  onChange,
  hasError,
}: {
  value: string;
  onChange: (val: string) => void;
  hasError: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = skillOptions.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.customSelect} ${open ? styles.selectOpen : ''} ${hasError ? styles.formError : ''}`}
    >
      <button
        type="button"
        className={styles.selectTrigger}
        onClick={() => setOpen(!open)}
      >
        <span className={selected ? styles.selectValue : styles.selectPlaceholder}>
          {selected ? selected.label : 'Select skill'}
        </span>
        <svg
          className={styles.selectChevron}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.selectDropdown}
            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {skillOptions.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  className={`${styles.selectOption} ${value === option.value ? styles.selectOptionActive : ''}`}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  {value === option.value && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SubmitVideoPage() {
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.1);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    skill: '',
    videoLink: '',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Submit Video for Coaching Analysis"
        path="/submit-video"
        description="Submit your cricket practice videos and receive personalized coaching insights from T. Dilip's team. Get expert analysis on batting, bowling, fielding, and wicket-keeping."
        image="/assets/tdilip-07-dharamsala-drill.jpg"
      />
      <PageHero
        title="Submit Video"
        subtitle="Share your cricket videos and receive personalized coaching solutions"
        bgImage="/assets/tdilip-07-dharamsala-drill.jpg"
      />

      {/* How It Works */}
      <section className={`section ${styles.stepsSection}`} ref={stepsRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Process</span>
            <h2 className="section-title">How It <span className="gold-text">Works</span></h2>
          </motion.div>
          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <motion.div key={step.num} className={styles.stepCard}
                initial={{ opacity: 0, y: 20 }}
                animate={stepsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Form */}
      <section className={`section ${styles.formSection}`} ref={formRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Submit</span>
            <h2 className="section-title">Your <span className="gold-text">Details</span></h2>
          </motion.div>

          {submitted ? (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.successIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className={styles.successTitle}>Video Submitted Successfully!</h3>
              <p className={styles.successText}>
                Thank you for your submission. Our coaching team will review your video and get back to you with personalized insights.
              </p>
              <button
                className={styles.submitBtn}
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', skill: '', videoLink: '', description: '' });
                }}
              >
                Submit Another Video
              </button>
            </motion.div>
          ) : (
            <motion.form
              className={styles.form}
              initial={{ opacity: 0 }}
              animate={formVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`${styles.formInput} ${errors.name ? styles.formError : ''}`}
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    className={`${styles.formInput} ${errors.email ? styles.formError : ''}`}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Skill Type <span className={styles.required}>*</span>
                  </label>
                  <CustomSelect
                    value={formData.skill}
                    onChange={(val) => handleChange('skill', val)}
                    hasError={!!errors.skill}
                  />
                  {errors.skill && <span className={styles.errorText}>{errors.skill}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Video Link <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="url"
                    className={`${styles.formInput} ${errors.videoLink ? styles.formError : ''}`}
                    placeholder="YouTube or Drive link"
                    value={formData.videoLink}
                    onChange={(e) => handleChange('videoLink', e.target.value)}
                  />
                  {errors.videoLink && <span className={styles.errorText}>{errors.videoLink}</span>}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Description <span className={styles.required}>*</span>
                </label>
                <textarea
                  className={`${styles.formTextarea} ${errors.description ? styles.formError : ''}`}
                  rows={4}
                  placeholder="What would you like feedback on?"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                />
                {errors.description && <span className={styles.errorText}>{errors.description}</span>}
              </div>
              <button type="submit" className={styles.submitBtn}>Submit Video</button>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
