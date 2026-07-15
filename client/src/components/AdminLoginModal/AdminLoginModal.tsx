import { useState } from 'react';
import style from './AdminLoginModal.module.css';

interface AdminLoginModalProps {
  onSuccess: (token: string) => void;
}

function AdminLoginModal({ onSuccess }: AdminLoginModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        throw new Error('Incorrect password');
      }

      const data = await res.json();
      onSuccess(data.token);
    } catch {
      setError('Incorrect password. Try again.');
      setPassword('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={style.overlay}>
      <form className={style.modal} onSubmit={handleSubmit}>
        <h2 className={style.title}>Admin Access</h2>
        <input
          type="password"
          className={style.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          autoFocus
        />
        {error && <p className={style.error}>{error}</p>}
        <button type="submit" className={style.button} disabled={submitting}>
          {submitting ? 'Checking...' : 'Enter'}
        </button>
      </form>
    </div>
  );
}

export { AdminLoginModal };