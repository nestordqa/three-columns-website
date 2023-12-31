import React, { useRef } from 'react';
import styles from '../styles/contact.module.css';
import '../styles/input.css';
import "../styles/animations.css";
import logo from '../images/logowithname.png';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from '../components/spinner/Spinner';

export const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const form = useRef();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{

  },[loader])
  const onSubmit = async (data) => {
    setLoader(true);
    let info = {
        info: true
    };
  data = {...data, ...info};

  emailjs.sendForm('service_bz709pi', 'template_efiz5zm', form.current, 'g7X702yKWjWHyIfur')
    .then((res)=>{
      setTimeout(() => {
        setLoader(false);
        navigate("/thanku");
        reset();
      }, 5 * 1000);
      console.log(res.text);
    },(err)=>{
      console.error(err)
    })
};

  return (
    loader ?
      <Spinner/>
    :
      <div className={styles.container}>

      <div className={styles.header}>
        <img src={logo} alt="Three Columns Logo" className={styles.logo}/>
        <div>
          <span>
            We&apos;re <br/> building.
          </span>
        </div>
      </div>

      <div className={styles.content}>

        <div className={styles.building}>
          <span className="animated fadeInLeft">
            Let&apos;s talk!
          </span>
        </div>

        <div className={styles.contact}>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.div1}>

              <div>
                <label htmlFor="name" className={styles.label}>What's your name?</label>
                <input 
                  className={styles.input} 
                  name='name'
                  {...register('name', {
                    required: true,
                    minLength: 4
                    })
                  }
                />
                {errors.name?.type === 'minLength' ? (
                  <p className="error">
                    You must write a larger name.
                  </p>
                  ) 
                  : 
                  null
                }
                {errors.name?.type === 'required' ? (
                  <p className="error">
                    Field required
                  </p>
                  ) 
                  : 
                  null
                }
              </div>
              
              <div>
                <label htmlFor="email" className={styles.label}>What's your email?</label>
                <input 
                  className={styles.input}  
                  name='email'
                  {...register('email', {
                    required: true,
                    })
                  }
                />
                {errors.email?.type === 'required' ? (
                  <p className="error">
                    Field required
                  </p>
                  ) 
                  : 
                  null
                }
              </div>
              <div>
                <label htmlFor="makeforyou" className={styles.label}>What can we make for you?</label>
                <input 
                  className={styles.input} 
                  name="makeforyou" 
                  {...register('makeforyou', {
                    required: true,
                    maxLength: 50
                  })
                  }
                />
                {errors.makeforyou?.type === 'required' ? (
                  <p className="error">
                    Field required
                  </p>
                  ) 
                  : 
                  null
                }
                {errors.makeforyou?.type === 'maxLength' ? (
                  <p className="error">
                    You must write a shorter sentence.
                  </p>
                  ) 
                  : 
                  null
                }
              </div>

            </div>
            <div className={styles.div2}>

              <div>
                <label htmlFor="budget" className={styles.label}>What's your budget?</label>
                <input 
                  className={styles.input} 
                  name='budget' 
                  {...register('budget', {
                    required: true,
                    maxLength: 20
                    })
                  }
                  />
                  {errors.budget?.type === 'required' ? (
                  <p className="error">
                    Field required
                  </p>
                  ) 
                  : 
                  null
                }
                {errors.budget?.type === 'maxLength' ? (
                  <p className="error">
                    You must write a shorter sentence.
                  </p>
                  ) 
                  : 
                  null
                }                
              </div>
              <div>
                <label htmlFor="talk" className={styles.label}>Describe your project in detail:</label>
                <textarea 
                    className={styles.textarea}
                    name='description'
                    {...register('description', {
                    required: true,
                    minLength: 100
                    })
                  }
                />
                {errors.description?.type === 'required' ? (
                  <p className="error">
                    Field required
                  </p>
                  ) 
                  : 
                  null
                }
                {errors.description?.type === 'minLength' ? (
                  <p className="error">
                    Your project description must have 100 characters at least.
                  </p>
                  ) 
                  : 
                  null
                }
              </div>

            </div>
            <div className={styles.div3}>

              <button type='submit'>
                Get in touch!
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
                <span className="fourth"></span>
              </button>
              <div className={styles.working}>
                <span>
                  We&apos;re working on our new website.
                </span>
              </div>
              <div className={styles.copyright}>
                <p>
                  All rights reserved &#169; 2023.
                </p>
              </div>
              <div className={styles.foot}>
                <span>
                  We&apos;re building.
                </span>
                <br/>
                <span>
                  We&apos;re working on our new website.
                </span>
                <p>
                  All rights reserved &#169; 2023.
                </p>
              </div>
            </div>

          </form>

        </div>
      </div>
      </div>
  )
};
