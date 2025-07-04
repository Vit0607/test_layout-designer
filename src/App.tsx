import Navigation from '@components/common/Header/Navigation/Navigation';
import Logo from '@components/Logo/Logo';
import Button from '@components/ui/Button/Button';
import Text from '@components/ui/Text/Text';

function App() {
  return (
    <>
      <Text tag="h1">
        <Text tag="span">Лидогенерация</Text>
        <br />
        для бизнеса
      </Text>
      <Button>Выбрать пакет лидов</Button>
      <Logo />
      <Navigation />
    </>
  );
}

export default App;
