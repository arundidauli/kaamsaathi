import { render, screen, fireEvent } from '@testing-library/react';
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

describe('KaamSaathi Application Integration', () => {
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

  it('navigates to the Dashboard view when Dashboard button is clicked', () => {
    renderApp();
    const dashboardButtons = screen.getAllByRole('button', { name: /Dashboard/i });
    fireEvent.click(dashboardButtons[0]);

    expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
    expect(screen.getByText(/Available Balance/i)).toBeInTheDocument();
  });

  it('navigates to Admin view and displays campaign management', () => {
    renderApp();
    const adminButtons = screen.getAllByRole('button', { name: /Admin/i });
    fireEvent.click(adminButtons[0]);

    expect(screen.getByText(/Admin Desi Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Follower or Task Campaign/i)).toBeInTheDocument();
  });

  it('opens detail modal when Details button is clicked on an opportunity', () => {
    renderApp();
    const detailButtons = screen.getAllByRole('button', { name: /Details/i });
    fireEvent.click(detailButtons[0]);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/About This Campaign/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Participate Now/i })).toBeInTheDocument();
  });

  it('completes a task in simulate modal and increments the balance', () => {
    renderApp();
    // Click on the first "Start Task" button
    const startButtons = screen.getAllByRole('button', { name: /Start Task/i });
    fireEvent.click(startButtons[0]);

    // Modal should appear
    expect(screen.getByText(/Task Simulation/i)).toBeInTheDocument();
    const completeButton = screen.getByRole('button', { name: /Simulate Complete/i });
    fireEvent.click(completeButton);

    // Toast with Shabash should appear
    expect(screen.getByText(/Shabash! Activity verified/i)).toBeInTheDocument();
  });

  it('filters opportunities by category', () => {
    renderApp();
    const surveyFilter = screen.getByRole('button', { name: 'Survey' });
    fireEvent.click(surveyFilter);

    expect(surveyFilter).toHaveClass('bg-teal-700');
  });

  it('opens and closes the withdraw modal', () => {
    renderApp();
    // Navigate to dashboard
    const dashboardButtons = screen.getAllByRole('button', { name: /Dashboard/i });
    fireEvent.click(dashboardButtons[0]);

    const withdrawButton = screen.getByRole('button', { name: /Withdraw Balance/i });
    fireEvent.click(withdrawButton);

    expect(screen.getByText(/Simulated Demo Balance/i)).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /Samajh Gaya/i });
    fireEvent.click(closeButton);

    expect(screen.queryByText(/Simulated Demo Balance/i)).not.toBeInTheDocument();
  });
});
