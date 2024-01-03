import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="mr-1 h-10 w-10"
              src="/favicon.ico"
              alt="Nano Narrative Logo"
            />
          }
          name="Nano Narrative"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/anggawidiarta" target="_blank">
          GitHub
        </NavMenuItem>
        <NavMenuItem
          href="https://www.linkedin.com/in/anggawidiarta/"
          target="_blank"
        >
          LinkedIn
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
