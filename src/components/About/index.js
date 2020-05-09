// PACKAGES
import styled from 'styled-components'

class About extends React.Component {
  render() {
    return (
      <Main1>
        <Div1>
          <Img1 src="https://i.imgur.com/NtmLXEU.jpg" alt="Profile Picture" />
        </Div1>
        <Div2>
          <P1>
            In August 2015, I took a backpacking trip with a friend through Germany, Netherlands, Switzerland, and Italy. Little did I know that it would change my outlook on life for good. You see, it wasn't my first trip in Europe as I went previously in 2013 but there was something different this time. This time, a new friend and I talked about life over a bottle of wine in Florence, Italy. I asked him what's next for him after this, he said he doesn't know yet and will go where he wants. This is the same guy who was traveling in Montenegro a couple weeks before. I asked him how he would manage his life back home in Montana. He said he lives on the road now. My mind was blown. Shortly, my two week travel stint was over, it was time to head back stateside.
            <br />
            <br />
            I came back to my pharmacist job in a cold, windowless box curious about what's left out there to see. I remember driving in to work one night at 3AM in the morning during one of my on-call shifts. Yes, 3AM. Got home after 5AM and still had to work at 8AM the next day. Even though I knew I could do this only for a couple of years, I had already decided. I stepped away from a full-time job in the medical industry on October 28th, 2016. I left the corporate world behind and dedicated myself to redesigning my lifestyle so I can have more freedom in life. I crushed 90% of my medical student debt, researched about different online ventures, and focused with more clarity about my life than I ever did before.
            <br />
            <br />
            It was time for change and I needed inspiration. I packed up my bags and decided to get lost to find myself. I flew down to Medellin, Colombia and was planning to stay only for a couple months. Three months turned into four, then five, then six. These were the times I tried different online ventures, met new friends, and temporarily freed myself from the 9-5 race. I finally gained perspective and found a love for web development, which allows for greater mobility and sustainability for a location-independent lifestyle. I decided to actively pursue this career track and come back to the states to find a web developer job.
            <br />
            <br />
            At the end of the day, we usually act in accordance with the values we hold closest. Some important ones for me are time, location-freedom, health, and experiences. There's not one thing I can say that can change your values instantaneously, but instead I will live by example. The very things we do every day define who we are and I believe that discipline will ultimately set you free. Perhaps one day, you'll have an experience that shift your reality. Until then, it's important not to forget about our dreams through fastidious, daily effort.
            <br />
            <br />
            <P2>Thanks for visiting my site.</P2>
            <P2>🌎Aho mitakuye oyasin💚</P2>
          </P1>
        </Div2>
      </Main1>
    )
  }
}

const Main1 = styled.main`
  width: 90%;
  margin: 0 auto;

  & > div {
    margin: 2rem 0;
  }
`
const Div1 = styled.div`
  text-align: center;
`
const Img1 = styled.img`
  width: 50%;
  border-radius: 5px;
`
const Div2 = styled.div`
  line-height: 1.3;
`
const P1 = styled.p`
  width: 50%;
  margin: 0 auto;
  font-size: 1.2rem;
`
const P2 = styled.p`
  text-align: center;
`

export default About;
