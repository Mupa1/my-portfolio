/* eslint-disable max-len */
import { useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import useStyles from './ContactForm.styles';
import { StyledButton } from '../StyledButton/StyledButton';
import { IComponentProps, IServerState } from '../../entities/types';

const ContactForm: React.FC = ({ props }: IComponentProps) => {
  const [serverState, setServerState] = useState<IServerState>({
    submitting: false,
    status: null,
  });

  const classes = useStyles(props);

  const handleServerResponse = (ok: boolean, msg: string, form: EventTarget & HTMLFormElement) => {
    setServerState({
      submitting: false,
      status: { ok, msg } as const,
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/maypayal',
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, 'Message sent successfully! Thanks!', form);
      })
      .catch((err) => {
        handleServerResponse(false, err.response.data.error, form);
      });
  };

  const getContactForm = () => (
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        className={classes.fields}
        required
      />
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        className={classes.fields}
        required
      />
      <textarea
        name='message'
        id='message'
        rows={10}
        placeholder='Message'
        className={classes.fields}
        required
      />
      <StyledButton type='submit' disabled={serverState.submitting}>
        Get in touch
      </StyledButton>
      {serverState.status && (
        <Typography className={!serverState.status.ok ? 'Error' : ''}>
          {serverState.status.msg}
        </Typography>
      )}
    </form>
  );

  return (
    <footer className={classes.root} id='contact'>
      <article className={classes.formContainer}>
        <Typography
          gutterBottom
          variant='h4'
          component='h2'
          sx={{ fontWeight: 'bold' }}
          className={classes.text}
        >
          Contact me
        </Typography>
        <Typography variant='body1' gutterBottom className={classes.text}>
          If you have an application you are interested in developing that you
          need built or a project that needs coding. I&apos;d love to help with
          it.
        </Typography>
        {getContactForm()}
      </article>
    </footer>
  );
};

export default ContactForm;
