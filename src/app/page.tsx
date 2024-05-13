import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';

const App = () => {
  return (
    <main>
      <Section>
        <Container className="justify-center items-center h-screen">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="flex flex-col justify-center items-center">
              <Button unstyled href="/pokemons/1">
                <div
                  className="min-h-96 w-96 flex border shadow-sm hover:shadow-lg hover:shadow-slate-500 transition-all rounded-full justify-center items-center "
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/pokemons.jpg')`,
                  }}
                >
                  <h1 className="text-white text-3xl font-bold">Pokemons</h1>
                </div>
              </Button>
            </div>
            <div className="flex justify-center items-center h-full">
              <h1>Escolha um caminho</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Button unstyled href="/pokebag">
                <div
                  className="min-h-96 w-96  flex border shadow-sm hover:shadow-lg hover:shadow-slate-500 transition-all rounded-full justify-center items-center"
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/pokebag.png')`,
                  }}
                >
                  <h1 className="text-white text-3xl font-bold">Pokebag</h1>
                </div>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default App;
