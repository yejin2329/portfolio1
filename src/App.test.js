import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(
  <MemoryRouter>
    <App />
    </MemoryRouter>
    );

 // Check for the presence of elements you expect
 const pageTitle = screen.getByText(/Welcome to the Future Web Developer's blog!/i);
 const aboutMeLink = screen.getByText(/ABOUT ME/i);
 const projectLink = screen.getByText(/PROJECT/i);
 const contactLink = screen.getByText(/CONTACT/i);

 // Assert that the elements are present
 expect(pageTitle).toBeInTheDocument();
 expect(aboutMeLink).toBeInTheDocument();
 expect(projectLink).toBeInTheDocument();
 expect(contactLink).toBeInTheDocument();
});
