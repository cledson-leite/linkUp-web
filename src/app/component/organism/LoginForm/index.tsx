'use client'

import React, { useState } from 'react';

import { useSignIn } from '@clerk/nextjs';
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';

import Button from '@/app/component/atom/Button';
import InputWithLabel from '@/app/component/molecule/InputWithLabel';

import styles from './LoginForm.module.css';


const socialProviders = [
  {
    provider: 'oauth_google',
    label: 'Entrar com Google',
    icon: <FaGoogle className={styles.socialIcon} />,
  },
  {
    provider: 'oauth_linkedin',
    label: 'Entrar com LinkedIn',
    icon: <FaLinkedin className={styles.socialIcon} />,
  },
  {
    provider: 'oauth_github',
    label: 'Entrar com GitHub',
    icon: <FaGithub className={styles.socialIcon} />,
  },
];

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, isLoaded } = useSignIn();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (!isLoaded) return;
    try {
      await signIn.create({ identifier: email, password });
      // Redirecionar ou atualizar estado de login aqui
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    if (!isLoaded) return;
    try {
      await signIn.authenticateWithRedirect({ strategy: provider as any, redirectUrl: '', redirectUrlComplete: '' });
    } catch {
      setError('Erro ao autenticar com provedor social');
    }
  };

  return (
    <>
      <h2 className={styles.title}>Entrar</h2>
      <div className={styles.socialButtons}>
        {socialProviders.map(({ provider, icon }) => (
          <button
            key={provider}
            className={styles.socialButton}
            onClick={() => handleSocialLogin(provider)}
            type="button"
          >
            {icon}
          </button>
        ))}
      </div>
      <div className={styles.socialDivider}>ou entre com email e senha</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputWithLabel
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ marginBottom: 12 }}
        />
        <InputWithLabel
          label="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ marginBottom: 20 }}
        />
        {error && <div className={styles.error}>{error}</div>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
      </form>
    </>
  );
};

export default LoginForm; 