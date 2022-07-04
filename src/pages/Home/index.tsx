import AppLayout from '@components/AppLayout';
import ReactCustomRender from '@components/ReactCustomRender';

const sampleElementConfig = [
  {
    component: 'card',
    children: [
      {
        component: 'img',
        props: {
          src: 'https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
      },
      {
        component: 'body',
        children: [
          {
            component: 'text',
            children: 'Some quick example text to build on the card title and make up the bulk of thes content.'
          },
          {
            component: 'button',
            props: {
              title: 'lolololol'
            }
          }
        ]
      }
    ]
  }
];

const Home = () => {
  return (
    <AppLayout>
      <ReactCustomRender page='marketing' jsonElements={sampleElementConfig} />
      <div>wow</div>
    </AppLayout>
  );
};

export default Home;
