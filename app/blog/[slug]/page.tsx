import { MdOutlineContentCopy, MdOutlineMail } from 'react-icons/md';
import './styles.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function Post(){

  const data = {
    date:'FEV 20, 2024',
    title:'Como comprar um apartamento na planta com segurança.',
    photo:'/placeholder_light.jpg',
    content:`
      <p>Comprar um apartamento na planta com segurança é uma dúvida comum para muitas pessoas.</p>
      <p>Isso acontece porque tem medo de investir nesse tipo de empreendimento, pois não tem informações práticas sobre como funciona a compra, o financiamento e orientações gerais para fazer a compra do imóvel com segurança. Afinal, realizar o sonho de ter a casa própria ou mesmo para investimento é algo tão importante para as suas vidas.</p>
      <p>1. Saiba o que é a compra de um apartamento na planta</p>
      <p>Os apartamentos na planta sempre são apresentados como lançamentos cheios de atrativos, contendo vantagens reais para quem quer investir ou não tem pressa em receber o apartamento e procura por condições de pagamento facilitadas em longo prazo, além da valorização patrimonial acumulada na evolução da obra.</p>
      <h3>1. Conheça todo o processo de compra e financiamento</h3>
      <p>A compra financiada de imóveis na planta é dividida por duas etapas:</p>
      <p>1ª) aquisição do apartamento durante o pré-lançamento;</p>
      <p>2ª) financiamento com o banco durante a obra, caso o empreendimento esteja inserido no programa de “Crédito Associativo”, ou o financiamento junto ao agente financeiro (Banco) será aprovado apenas no final da obra.</p>
      <p>Na primeira etapa o comprador pagará o valor da entrada do imóvel e as parcelas negociadas no montante acordado com a construtora, o que alguns chamam de poupança de obra. Essas parcelas são corrigidas pelo CUB (Custo Unitário Básico da construção civil, determinado pelo Sindicato daIndústria da Construção Civil no Estado do Espírito Santo, SINDUSCON, de acordo com a NBR 12721:2006),que é um índice de correção usado no mercado da construção civil, que equaliza os custos de matérias-primas e mão de obra que o mercado absorve.</p>
      <img src="/seo_image.jpg"/>
      <small>Legenda</small>
      <br></br>
      <p>Caso o imóvel esteja no programa “Crédito Associativo”, existem algumas vantagens para os compradores de imóveis na planta quando assinam com o agente financeiro:</p>
      <ul>
      <li>O custo da documentação do imóvel (escritura) fica bem abaixo do que se pagaria caso o imóvel estivesse pronto.</li>
      <li>O índice de correção sai do CUB e passa a ser medido pelos “Juros de Obra”, que é um índice é ajustado de acordo com a evolução de obra no mês. No caso da aquisição do apartamento pronto esse índice é medido em cima do percentual apenas da obra concluída, além da garantia real da entrega do empreendimento.</li>
      <li>Os clientes que adquiriram seus apartamentos durante a obra fazem o financiamento com o banco associado da incorporadora, com a garantia do recebimento do imóvel comprado e ainda uma redução significativa no valor da escritura, já que nessa modalidade os impostos são cobrados por fração de terreno.</li>
      </ul>
      <h3>1. Avalie a idoneidade da Construtora e outros empreendimentos para ter segurança no investimento</h3>
      <p>Avalie bem a construtora de quem está comprando o imóvel. Pergunte, pesquise, conheça profundamente se é uma empresa séria no mercado e com empreendimentos já entregues. Além disso, visite os empreendimentos para conhecer e ver de perto as unidades prontas.</p>
      <p>Procure conversar com pessoas que já tenham comprado imóveis, fale com síndicos e moradores sobre a qualidade dos materiais e revestimentos usados, sobre como os problemas foram resolvidos, se foi tudo cumprido como prometido, etc.</p>
      <h3>1. Faça uma pesquisa sobre a situação legal da construção</h3>
      <p>Muito importante é conhecer a situação do empreendimento, do terreno e da construtora. Por isso, vale ir ao Cartório de Registro de Imóveis onde ele deve estar registrado para certificar-se de que está tudo certo. Leia com atenção o memorial descritivo que acompanhar o registro para confirmar todas as características que foram passadas pelo corretor. Pesquise também na Prefeitura da sua cidade se há qualquer impedimento sobre a construção ou sobre o terreno onde ela está sendo feita.</p>
      <h3>1. Visite o apartamento modelo e tenha mais segurança antes de fechar negócio</h3>
      <p>Encontrou o apartamento ideal e as condições perfeitas de pagamento? Então calma, senta e respira. Gaste um tempo para fazer as pesquisas profundas, vá ao apartamento modelo e reúna o máximo de informações que conseguir. Pergunte, questione e pergunte novamente. Todas as informações serão suas principais referências para essa aquisição.</p>
      <p>Seguindo esses passos, você tem mais segurança para investir em um imóvel na planta e realizar o sonho de ter a sua casa própria.</p>
      <p><b>Você ainda ficou com dúvidas sobre as como comprar um apartamento na planta?</b> <a href="#">Entre em contato com um de nossos para te auxiliar em todas as informações que você precisar.</a></p>
      <p>Se você deseja saber um pouco mais sobre alguns dos Lançamentos da Kemp Engenharia, conheça o Ilha de Santorini, apartamentos de 2 e 3 quartos na Praia de Itaparica em Vila Velha, pertinho de tudo que você e sua família precisa para morar com sofisticação e segurança. Aproveite a condição especial no Pré-lançamento!</p>
    `,

  }

  return(
    <div className="post-page-container">
      <p className="date">{data.date}</p>
      <h1 className="title">{data.title}</h1>
      <img className="cover" src={data.photo}/>
      <div className="share-post-mobile">
          <span>Compartilhe</span>
          <div className="share-container-icons">
            <MdOutlineContentCopy />
            <MdOutlineMail />
            <FaWhatsapp />
          </div>
      </div>
      <div className="post-page-content">
        <div className="hidden lg:block"></div>
        <div className="post-text" dangerouslySetInnerHTML={{ __html: data.content }}></div>
        <div className="share-post">
          <span>Compartilhe</span>
          <MdOutlineContentCopy />
          <MdOutlineMail />
          <FaWhatsapp />
        </div>
      </div>
    </div>
  )
}