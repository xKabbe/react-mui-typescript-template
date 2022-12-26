// Local imports
import HelloWorld from '../../components/HelloWorld/HelloWorld';

// Component definition
function HomePage() {
  return (
    <HelloWorld
      box={{
        sx: {
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    />
  );
}

// Default export
export default HomePage;
