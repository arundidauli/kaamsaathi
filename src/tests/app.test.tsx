import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from '../App';
import { ToastProvider } from '../context/ToastContext';
import { AppProvider } from '../context/AppContext';

const renderApp = () => {
  return render(
    <ToastProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ToastProvider>
  );
};

describe('KaamSaathi Showcase Platform Integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the branding and main headline on initial load', () => {
    renderApp();
    const brandElements = screen.getAllByText(/KaamSaathi/i);
    expect(brandElements.length).toBeGreaterThan(0);
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toHaveTextContent(/Phone se free time ko/i);
    expect(mainHeading).toHaveTextContent(/useful banao/i);
  });

  it('renders Pese Kamao in the hero floating badge and removes +₹15 Follow Reward', () => {
    renderApp();
    // Verify that "+₹15 Follow Reward" is NOT in the document
    expect(screen.queryByText(/\+₹15 Follow Reward/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/₹15/)).not.toBeInTheDocument();

    // Verify "Pese Kamao" badge is present
    const peseKamaoBadges = screen.getAllByText(/Pese Kamao/i);
    expect(peseKamaoBadges.length).toBeGreaterThan(0);
  });

  it('does NOT render the Sample Active Tasks & Campaigns section', () => {
    renderApp();
    // The section "Sample Active Tasks & Campaigns" must be removed
    expect(screen.queryByText(/Sample Active Tasks & Campaigns/i)).not.toBeInTheDocument();
  });

  it('navigates to How It Works section when clicked', () => {
    renderApp();
    const howButtons = screen.getAllByRole('button', { name: /How It Works/i });
    fireEvent.click(howButtons[0]);

    expect(screen.getByRole('heading', { name: /How It Works/i })).toBeInTheDocument();
    expect(screen.getByText(/Seedha aur Aasaan Process/i)).toBeInTheDocument();
  });

  it('navigates to Pese Kamao (rewards) section when clicked', () => {
    renderApp();
    const peseKamaoButtons = screen.getAllByRole('button', { name: /Pese Kamao/i });
    fireEvent.click(peseKamaoButtons[0]);

    expect(screen.getByText(/Phone se free time mein pese kamao/i)).toBeInTheDocument();
    expect(screen.getByText(/Pese Kaise Milte Hain/i)).toBeInTheDocument();
    // Verify that fake arbitrary money amounts like +₹20 or +₹50 do not exist
    expect(screen.queryByText(/\+₹20/)).not.toBeInTheDocument();
    expect(screen.queryByText(/\+₹50/)).not.toBeInTheDocument();
  });

  it('navigates to FAQ section and toggles accordion items', () => {
    renderApp();
    const faqButtons = screen.getAllByRole('button', { name: /FAQ/i });
    fireEvent.click(faqButtons[0]);

    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();

    const faqQuestion = screen.getByRole('button', { name: /Is joining KaamSaathi free\?/i });
    fireEvent.click(faqQuestion);
    expect(screen.getByText(/100% free/i)).toBeInTheDocument();
  });

  it('supports mobile bottom navigation to switch to Pese Kamao', () => {
    renderApp();
    const mobileNav = screen.getByRole('navigation', { name: /Mobile Bottom Navigation/i });
    expect(mobileNav).toBeInTheDocument();

    const peseKamaoTab = within(mobileNav).getByRole('button', { name: /Pese Kamao/i });
    fireEvent.click(peseKamaoTab);

    expect(screen.getByText(/Phone se free time mein pese kamao/i)).toBeInTheDocument();
  });

  it('navigates to Rules & Terms page', () => {
    renderApp();
    const termsButtons = screen.getAllByRole('button', { name: /Terms & Rules/i });
    fireEvent.click(termsButtons[0]);

    expect(screen.getByText(/Zero Investment Policy/i)).toBeInTheDocument();
  });

  it('renders hero image with kaamsaathi.png and video explainer section', () => {
    renderApp();
    const heroImage = screen.getByAltText(/KaamSaathi Community Platform/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage.getAttribute('src')).toMatch(/kaamsaathi\.png$/);

    const videoHeading = screen.getByRole('heading', { name: /Dekhein KaamSaathi Kaise Kaam Karta Hai/i });
    expect(videoHeading).toBeInTheDocument();

    const youtubeBtn = screen.getByRole('button', { name: /YouTube Video/i });
    expect(youtubeBtn).toBeInTheDocument();

    const hdBtn = screen.getByRole('button', { name: /HD Video/i });
    expect(hdBtn).toBeInTheDocument();
  });

  it('toggles video playback when play button is clicked', () => {
    renderApp();
    const playTrigger = screen.getByRole('button', { name: /Play KaamSaathi explainer video/i });
    expect(playTrigger).toBeInTheDocument();

    fireEvent.click(playTrigger);

    // After clicking, iframe is rendered for YouTube player
    const iframe = screen.getByTitle(/KaamSaathi Platform Explainer Video/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', expect.stringContaining('61MJxVKKxZE'));
  });

  it('switches to HD local video mode when clicked', () => {
    renderApp();
    const hdBtn = screen.getByRole('button', { name: /HD Video/i });
    fireEvent.click(hdBtn);

    // Video element should be present
    const videoElement = document.querySelector('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement?.getAttribute('src')).toMatch(/kaamsathi\.mp4$/);
  });
});
