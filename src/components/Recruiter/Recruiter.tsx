import netherlandsRecruiter from './jeremy-akeze-doghouse-it-recruitment.jpg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img
        alt="DineshKumar - Web Developer"
        src={netherlandsRecruiter}
      />
    </S.Thumbnail>
    <S.Description>
      <h4>
        Work with Me
        <S.Flag />
      </h4>
      <p>
        Hi! I'm Dinesh KUmar from Charkhi Dadri, Haryana. I'm Currently 
        working on web development and want to make career in it,{' '}
        <a href="https://www.linkedin.com/in/dinesh-kumar-0246a7168">
          <b>follow me on Linkedin.</b>
        </a>
      </p>
    </S.Description>
  </S.Container>
);

export default Recruiter;
