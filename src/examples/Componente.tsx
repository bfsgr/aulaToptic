interface Props {
  nome: string
}

const blockStyle = { border: '1px solid', padding: '8px', borderRadius: '8px' }

function Componente() {
  return (
    <div style={blockStyle}>
      <p>Isso é um componente simples</p>
    </div>
  )
}

function ComponenteAninhado() {
  return (
    <div style={blockStyle}>
      <p>Isso é um componente com um componente aninhado</p>
      <Componente />
    </div>
  )
}

function ComponenteComProps(props: Props) {
  return (
    <div style={blockStyle}>
      <p>Olá {props.nome}, esse é um componente com propriedades</p>
    </div>
  )
}

function Raiz() {
  return (
    <div>
      <section>
        <h4>Componente simples</h4>
        <Componente />
      </section>
      <section>
        <h4>Componente com propriedades</h4>
        <ComponenteComProps nome="Mundo" />
      </section>
      <section>
        <h4>Componente aninhado</h4>
        <ComponenteAninhado />
      </section>
    </div>
  )
}

export default Raiz
