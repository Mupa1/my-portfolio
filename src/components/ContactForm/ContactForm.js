/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import axios from 'axios';
import useStyles from './ContactForm.styles';
import { StyledButton } from '../StyledButton/StyledButton';

const ContactForm = ({ props }) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const classes = useStyles(props);

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/maypayal',
      data: new FormData(form)
    })
      .then(() => {
        handleServerResponse(true, 'Message sent successfully! Thanks!', form);
      })
      .catch(err => {
        handleServerResponse(false, err.response.data.error, form);
      });
  };

  const getContactForm = () => (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className={`${classes.inputs} ${classes.fields}`}
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className={`${classes.inputs} ${classes.fields}`}
        required
      />
      <textarea
        name="message"
        id="message"
        rows="10"
        placeholder="Message"
        className={classes.fields}
        required
      />
      <StyledButton type="submit" disabled={serverState.submitting} className={classes.submitBtn}>
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
    <footer className={classes.root} id="contact" name="contact">
      <article className={classes.formContainer}>
        <Typography gutterBottom variant="h4" component="h2" sx={{ fontWeight: 'bold', }} className={classes.text}>
          Contact me
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.text}>
          If you have an application you are interested in developing that you need built or a project that needs coding. I&apos;d love to help  with it.
        </Typography>
        {getContactForm()}
      </article>
    </footer>
  );
};

ContactForm.defaultProps = {
  props: () => { },
};

ContactForm.propTypes = {
  props: PropTypes.func,
};

export default ContactForm;
