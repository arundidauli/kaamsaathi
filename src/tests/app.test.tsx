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

  it('navigates to the Opportunities section when clicked', () => {
    renderApp();
    const oppButtons = screen.getAllByRole('button', { name: /Opportunities/i });
    fireEvent.click(oppButtons[0]);

    expect(screen.getByText(/Sample Active Tasks & Campaigns/i)).toBeInTheDocument();
  });

  it('navigates to How It Works section when clicked', () => {
    renderApp();
    const howButtons = screen.getAllByRole('button', { name: /How It Works/i });
    fireEvent.click(howButtons[0]);

    expect(screen.getByRole('heading', { name: /How It Works/i })).toBeInTheDocument();
  });

  it('navigates to Rewards section when clicked', () => {
    renderApp();
    const rewardButtons = screen.getAllByRole('button', { name: /Rewards/i });
    fireEvent.click(rewardButtons[0]);

    expect(screen.getByText(/Small rewards can make a difference/i)).toBeInTheDocument();
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

  it('opens detail modal when Details button is clicked on an opportunity', () => {
    renderApp();
    const detailButtons = screen.getAllByRole('button', { name: /Details/i });
    fireEvent.click(detailButtons[0]);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/About This Opportunity/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Join Community to Participate/i })).toBeInTheDocument();

    const closeButtons = screen.getAllByRole('button', { name: /Close/i });
    fireEvent.click(closeButtons[0]);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('filters opportunities by category', () => {
    renderApp();
    const surveyFilter = screen.getByRole('button', { name: 'Survey' });
    fireEvent.click(surveyFilter);

    expect(surveyFilter).toHaveClass('bg-teal-700');
  });

  it('supports mobile bottom navigation to switch sections', () => {
    renderApp();
    const mobileNav = screen.getByRole('navigation', { name: /Mobile Bottom Navigation/i });
    expect(mobileNav).toBeInTheDocument();

    const tasksTab = within(mobileNav).getByRole('button', { name: /^Tasks$/i });
    fireEvent.click(tasksTab);

    expect(screen.getByText(/Sample Active Tasks & Campaigns/i)).toBeInTheDocument();
  });

  it('navigates to Rules & Terms page', () => {
    renderApp();
    const termsButtons = screen.getAllByRole('button', { name: /Terms & Rules/i });
    fireEvent.click(termsButtons[0]);

    expect(screen.getByText(/Zero Investment Policy/i)).toBeInTheDocument();
  });
});
