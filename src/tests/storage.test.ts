import { describe, it, expect, beforeEach } from 'vitest';
import { storage } from '../services/storage';

describe('Storage Service', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns default value when key does not exist', () => {
    const val = storage.get('non_existent', 42);
    expect(val).toBe(42);
  });

  it('stores and retrieves JSON serializable data', () => {
    const data = { name: 'Arun', balance: 135 };
    storage.set('user_data', data);
    const retrieved = storage.get('user_data', null);
    expect(retrieved).toEqual(data);
  });

  it('removes stored data', () => {
    storage.set('test_key', 'hello');
    expect(storage.get('test_key', '')).toBe('hello');
    storage.remove('test_key');
    expect(storage.get('test_key', 'fallback')).toBe('fallback');
  });

  it('handles invalid JSON gracefully and returns fallback', () => {
    localStorage.setItem('corrupted', '{bad json');
    const val = storage.get('corrupted', { default: true });
    expect(val).toEqual({ default: true });
  });
});
