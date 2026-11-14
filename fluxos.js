// Catálogo de fluxos — o Kaiki mantém este arquivo quando um fluxo novo é publicado.
const FLUXOS = [
  {
    id: "exemplo-ativacao-de-rota",
    titulo: "Exemplo — Ativação de rota",
    xml: `<mxfile host="app.diagrams.net" agent="Kaiki" version="24.7.0">
  <diagram id="exemplo1" name="Exemplo">
    <mxGraphModel dx="1000" dy="700" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="500" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="n1" value="Início: solicitação de rota" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="1">
          <mxGeometry x="40" y="40" width="180" height="60" as="geometry" />
        </mxCell>
        <mxCell id="n2" value="Supervisão analisa" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;" vertex="1" parent="1">
          <mxGeometry x="300" y="40" width="180" height="60" as="geometry" />
        </mxCell>
        <mxCell id="n3" value="Aprovado?" style="rhombus;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d79b00;" vertex="1" parent="1">
          <mxGeometry x="320" y="170" width="140" height="80" as="geometry" />
        </mxCell>
        <mxCell id="n4" value="Rota liberada no Log-PI" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;" vertex="1" parent="1">
          <mxGeometry x="540" y="180" width="180" height="60" as="geometry" />
        </mxCell>
        <mxCell id="n5" value="Justificativa registrada" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#f8cecc;strokeColor=#b85450;" vertex="1" parent="1">
          <mxGeometry x="60" y="180" width="170" height="60" as="geometry" />
        </mxCell>
        <mxCell id="e1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;" edge="1" parent="1" source="n1" target="n2">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="e2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;" edge="1" parent="1" source="n2" target="n3">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="e3" value="Sim" style="edgeStyle=orthogonalEdgeStyle;rounded=0;" edge="1" parent="1" source="n3" target="n4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="e4" value="Não" style="edgeStyle=orthogonalEdgeStyle;rounded=0;" edge="1" parent="1" source="n3" target="n5">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`
  }
];