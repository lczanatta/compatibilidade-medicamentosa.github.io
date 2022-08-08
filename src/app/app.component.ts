import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'compa-medica';

  medList  = [
  {varName : 'acidofolinico' , name: 'ácido folínico'}, //
  {varName : 'aciclovir' , name: 'aciclovir'}, //
  {varName : 'acidotranexâmico' , name: 'ácido tranexâmico'}, //
  {varName : 'adenosina' , name: 'adenosina'}, //
  {varName : 'adrenalina' , name: 'adrenalina'},
  {varName : 'albumina' , name: 'albumina'},
  {varName : 'alteplase' , name: 'alteplase'},
  {varName : 'amicacina' , name: 'amicacina'},
  {varName : 'aminofilina' , name: 'aminofilina'},
  {varName : 'amiodarona' , name: 'amiodarona'},
  {varName : 'amoxicilinaclavulanato' , name: 'amoxicilina-clavulanato'},
  {varName : 'ampicilina' , name: 'ampicilina'},
  {varName : 'ampicilinasulbactam' , name: 'ampicilina-sulbactam'},
  {varName : 'anfotericinaB' , name: 'anfotericina B'},
  {varName : 'anidulafungina' , name: 'anidulafungina'},
  {varName : 'atracurio' , name: 'atracúrio'},
  {varName : 'atropina' , name: 'atropina'},
  {varName : 'azitromicina' , name: 'azitromicina'},
  {varName : 'azuldemetileno' , name: 'azul de metileno'},
  {varName : 'bicarbonatodesódio' , name: 'bicarbonato de sódio'},
  {varName : 'cefaLOTina' , name: 'cefaLOTina'},
  {varName : 'ceFAZolina' , name: 'ceFAZolina'},
  {varName : 'ceFEPima' , name: 'ceFEPima'},
  {varName : 'cefoTAXima' , name: 'cefoTAXima'},
  {varName : 'cefOXitina' , name: 'cefOXitina'},
  {varName : 'cefTAZidima' , name: 'cefTAZidima'},
  {varName : 'cefTRIAXona' , name: 'cefTRIAXona'},
  {varName : 'cefUROxima' , name: 'cefUROxima'},
  {varName : 'cetamina' , name: 'cetamina'},
  {varName : 'cetoprofeno' , name: 'cetoprofeno'},
  {varName : 'ciprofloxacino' , name: 'ciprofloxacino'},
  {varName : 'clindamicina' , name: 'clindamicina'},
  {varName : 'clonidina' , name: 'clonidina'},
  {varName : 'cloretodecalcio' , name: 'cloreto de cálcio (reposição de cálcio)'},
  {varName : 'cloretodepotassio' , name: 'cloreto de potássio'},
  {varName : 'clorpromazina' , name: 'clorpromazina'},
  {varName : 'dantroleno' , name: 'dantroleno'},
  {varName : 'DESMopressina' , name: 'DESMopressina'},
  {varName : 'dexametasona' , name: 'dexametasona'},
  {varName : 'diazepam' , name: 'diazepam'},
  {varName : 'dimenidratopiridoxina' , name: 'dimenidrato-piridoxina'},
  {varName : 'dipirona' , name: 'dipirona'},
  {varName : 'DOBUTamina' , name: 'DOBUTamina'},
  {varName : 'DOPamina' , name: 'DOPamina'},
  {varName : 'droperidol' , name: 'droperidol'},
  {varName : 'esmolol' , name: 'esmolol'},
  {varName : 'estreptomicina' , name: 'estreptomicina'},
  {varName : 'fenitoina' , name: 'fenitoína'},
  {varName : 'fenobarbital' , name: 'fenobarbital'},
  {varName : 'fentanil' , name: 'fentanil'},
  {varName : 'ferrocoloidal' , name: 'ferro coloidal'},
  {varName : 'filgrastima' , name: 'filgrastima'},
  {varName : 'fitomenadiona' , name: 'fitomenadiona'},
  {varName : 'fluconazol' , name: 'fluconazol'},
  {varName : 'flumazenil' , name: 'flumazenil'},
  {varName : 'fosfatodepotassio' , name: 'fosfato de potássio'},
  {varName : 'furosemida' , name: 'furosemida'},
  {varName : 'ganciclovir' , name: 'ganciclovir'},
  {varName : 'gentamicina' , name: 'gentamicina'},
  {varName : 'gluconatodecalcio' , name: 'gluconato de cálcio'},
  {varName : 'haloperidol' , name: 'haloperidol'},
  {varName : 'heparina' , name: 'heparina'},
  {varName : 'hidralazina' , name: 'hidralazina'},
  {varName : 'hidrocortisona' , name: 'hidrocortisona'},
  {varName : 'hioscina' , name: 'hioscina'},
  {varName : 'imipenemcilastatina' , name: 'imipenem-cilastatina'},
  {varName : 'insulinaregular' , name: 'insulina regular'},
  {varName : 'lanatosideo' , name: 'lanatosídeo'},
  {varName : 'levofloxacino' , name: 'levofloxacino'},
  {varName : 'lidocaína' , name: 'lidocaína'},
  {varName : 'linezolida' , name: 'linezolida'},
  {varName : 'manitol' , name: 'manitol'},
  {varName : 'meropenem' , name: 'meropenem'},
  {varName : 'metilprednisolona' , name: 'metilprednisolona'},
  {varName : 'metoclopramida' , name: 'metoclopramida'},
  {varName : 'metoprolol' , name: 'metoprolol'},
  {varName : 'metronidazol' , name: 'metronidazol'},
  {varName : 'midazolam' , name: 'midazolam'},
  {varName : 'milrinona' , name: 'milrinona'},
  {varName : 'morfina' , name: 'morfina'},
  {varName : 'naloxona' , name: 'naloxona'},
  {varName : 'neostigmina' , name: 'neostigmina'},
  {varName : 'nitroGLICERINA' , name: 'nitroGLICERINA'},
  {varName : 'nitroPRUSSIATOdesódio' , name: 'nitroPRUSSIATO de sódio'},
  {varName : 'noradrenalina' , name: 'noradrenalina'},
  {varName : 'ocitocina' , name: 'ocitocina'},
  {varName : 'octreotida' , name: 'octreotida'},
  {varName : 'oligoelementos' , name: 'oligoelementos'},
  {varName : 'omeprazol' , name: 'omeprazol'},
  {varName : 'ondansetrona' , name: 'ondansetrona'},
  {varName : 'oxacilina' , name: 'oxacilina'},
  {varName : 'pamidronato' , name: 'pamidronato'},
  {varName : 'pancurônio' , name: 'pancurônio'},
  {varName : 'penicilinaGpotassica' , name: 'penicilina G potássica'},
  {varName : 'piperacilinatazobactam' , name: 'piperacilina-tazobactam'},
  {varName : 'polimixinaB' , name: 'polimixina B'},
  {varName : 'polivitamínico' , name: 'polivitamínico'},
  {varName : 'prometazina' , name: 'prometazina'},
  {varName : 'propofol' , name: 'propofol'},
  {varName : 'protamina' , name: 'protamina'},
  {varName : 'ranitidina' , name: 'ranitidina'},
  {varName : 'remifentanil' , name: 'remifentanil'},
  {varName : 'ringerlactato' , name: 'ringer lactato'},
  {varName : 'rocurônio' , name: 'rocurônio'},
  {varName : 'salbutamol' , name: 'salbutamol'},
  {varName : 'succinilcolina' , name: 'succinilcolina'},
  {varName : 'sulfametoxazoltrimetoprima' , name: 'sulfametoxazol-trimetoprima'},
  {varName : 'sulfatodemagnésio' , name: 'sulfato de magnésio'},
  {varName : 'tiamina' , name: 'tiamina'},
  {varName : 'tigeciclina' , name: 'tigeciclina'},
  {varName : 'tiopental' , name: 'tiopental'},
  {varName : 'tramadol' , name: 'tramadol'},
  {varName : 'vancomicina' , name: 'vancomicina'},
  {varName : 'VASopressina' , name: 'VASopressina'},
  {varName : 'vitaminasdocomplexoB' , name: 'vitaminas do complexo B'},
  {varName : 'voriconazol' , name: 'voriconazol'},
  {varName : 'zidovudina' , name: 'zidovudina'},
]
  medMap = new Map<string, string>();

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      medicine1: this.fb.control('', [Validators.required]),
      medicine2: this.fb.control('', [Validators.required])
    });
  }
  ngOnInit(): void {

    this.medMap.set('ácido folínicoXaciclovir', 'C');
    this.medMap.set('ácido folínicoXamicacina', 'C');
    this.medMap.set('ácido folínicoXaminofilina', 'C');
    this.medMap.set('ácido folínicoXamiodarona', 'I');
    this.medMap.set('ácido folínicoXampicilina', 'C');
    this.medMap.set('ácido folínicoXampicilina-sulbactam', 'C');
    this.medMap.set('ácido folínicoXanfotericina B', 'I');
    this.medMap.set('ácido folínicoXanidulafungina', 'C');
    this.medMap.set('ácido folínicoXatracúrio', 'C');
    this.medMap.set('ácido folínicoXazitromicina', 'C');
    this.medMap.set('ácido folínicoXbicarbonato de sódio', 'I');
    this.medMap.set('ácido folínicoXceFAZolina', 'C');
    this.medMap.set('ácido folínicoXceFEPima', 'C');
    this.medMap.set('ácido folínicoXcefoTAXima', 'C');
    this.medMap.set('ácido folínicoXcefOXitina', 'C');
    this.medMap.set('ácido folínicoXcefTAZidima', 'C');
    this.medMap.set('ácido folínicoXcefTRIAXona', 'I');
    this.medMap.set('ácido folínicoXcefUROxima', 'C');
    this.medMap.set('ácido folínicoXclindamicina', 'C');
    this.medMap.set('ácido folínicoXcloreto de cálcio', 'C');
    this.medMap.set('ácido folínicoXcloreto de potássio', 'C');
    this.medMap.set('ácido folínicoXclorpromazina', 'I');
    this.medMap.set('ácido folínicoXdantroleno', 'I');
    this.medMap.set('ácido folínicoXdexametasona', 'C');
    this.medMap.set('ácido folínicoXdiazepam', 'I');
    this.medMap.set('ácido folínicoXDOBUTamina', 'C');
    this.medMap.set('ácido folínicoXDOPamina', 'C');
    this.medMap.set('ácido folínicoXdroperidol', 'I');
    this.medMap.set('ácido folínicoXesmolol', 'C');
    this.medMap.set('ácido folínicoXfenitoína', 'I');
    this.medMap.set('ácido folínicoXfenobarbital', 'C');
    this.medMap.set('ácido folínicoXfentanil', 'C');
    this.medMap.set('ácido folínicoXfilgrastima', 'C');
    this.medMap.set('ácido folínicoXfluconazol', 'C');
    this.medMap.set('ácido folínicoXfosfato de potássio', 'I');
    this.medMap.set('ácido folínicoXfurosemida', 'C');
    this.medMap.set('ácido folínicoXganciclovir', 'C');
    this.medMap.set('ácido folínicoXgentamicina', 'C');
    this.medMap.set('ácido folínicoXgluconato de cálcio', 'C');
    this.medMap.set('ácido folínicoXhaloperidol', 'C');
    this.medMap.set('ácido folínicoXheparina', 'C');
    this.medMap.set('ácido folínicoXhidralazina', 'C');
    this.medMap.set('ácido folínicoXhidrocortisona', 'C');
    this.medMap.set('ácido folínicoXimipenem-cilastatina', 'C');
    this.medMap.set('ácido folínicoXinsulina regular', 'C');
    this.medMap.set('ácido folínicoXlevofloxacino', 'C');
    this.medMap.set('ácido folínicoXlidocaína', 'C');
    this.medMap.set('ácido folínicoXlinezolida', 'C');
    this.medMap.set('ácido folínicoXmanitol', 'C');
    this.medMap.set('ácido folínicoXmeropenem', 'C');
    this.medMap.set('ácido folínicoXmetilprednisolona', 'I');
    this.medMap.set('ácido folínicoXmetoclopramida', 'C');
    this.medMap.set('ácido folínicoXmetoprolol', 'C');
    this.medMap.set('ácido folínicoXmetronidazol', 'C');
    this.medMap.set('ácido folínicoXmidazolam', 'C');
    this.medMap.set('ácido folínicoXmilrinona', 'C');
    this.medMap.set('ácido folínicoXmorfina', 'C');
    this.medMap.set('ácido folínicoXnaloxona', 'I');
    this.medMap.set('ácido folínicoXnitroGLICERINA', 'C');
    this.medMap.set('ácido folínicoXnitroPRUSSIATO de sódio', 'C');
    this.medMap.set('ácido folínicoXnoradrenalina', 'C');
    this.medMap.set('ácido folínicoXocitocina', 'C');
    this.medMap.set('ácido folínicoXoctreotida', 'C');
    this.medMap.set('ácido folínicoXondansetrona', 'C');
    this.medMap.set('ácido folínicoXpamidronato', 'I');
    this.medMap.set('ácido folínicoXpancurônio', 'C');
    this.medMap.set('ácido folínicoXpiperacilina-tazobactam', 'C');
    this.medMap.set('ácido folínicoXpolimixina B', 'C');
    this.medMap.set('ácido folínicoXprometazina', 'C');
    this.medMap.set('ácido folínicoXranitidina', 'C');
    this.medMap.set('ácido folínicoXremifentanil', 'C');
    this.medMap.set('ácido folínicoXringer lactato', 'C');
    this.medMap.set('ácido folínicoXrocurônio', 'C');
    this.medMap.set('ácido folínicoXsuccinilcolina', 'C');
    this.medMap.set('ácido folínicoXsulfametoxazol-trimetoprima', 'C');
    this.medMap.set('ácido folínicoXsulfato de magnésio', 'C');
    this.medMap.set('ácido folínicoXtigeciclina', 'C');
    this.medMap.set('ácido folínicoXtiopental', 'I');
    this.medMap.set('ácido folínicoXvancomicina', 'I');
    this.medMap.set('ácido folínicoXVASopressina', 'C');
    this.medMap.set('ácido folínicoXvoriconazol', 'C');
    this.medMap.set('ácido folínicoXzidovudina', 'C');



    this.medMap.set('aciclovirXamicacina', 'C');
    this.medMap.set('aciclovirXaminofilina', 'C');
    this.medMap.set('aciclovirXamiodarona', 'I');
    this.medMap.set('aciclovirXampicilina', 'C');
    this.medMap.set('aciclovirXampicilina-sulbactam', 'I');
    this.medMap.set('aciclovirXanfotericina B', 'I');
    this.medMap.set('aciclovirXanidulafungina', 'C');
    this.medMap.set('aciclovirXatracúrio', 'C');
    this.medMap.set('aciclovirXazitromicina', 'C');
    this.medMap.set('aciclovirXbicarbonato de sódio', 'C');
    this.medMap.set('aciclovirXceFAZolina', 'C');
    this.medMap.set('aciclovirXceFEPima', 'I');
    this.medMap.set('aciclovirXcefoTAXima', 'C');
    this.medMap.set('aciclovirXcefOXitina', 'C');
    this.medMap.set('aciclovirXcefTAZidima', 'C');
    this.medMap.set('aciclovirXcefTRIAXona', 'C');
    this.medMap.set('aciclovirXcefUROxima', 'C');
    this.medMap.set('aciclovirXcetamina', 'I');
    this.medMap.set('aciclovirXciprofloxacino', 'I');
    this.medMap.set('aciclovirXclindamicina', 'C');
    this.medMap.set('aciclovirXcloreto de cálcio (reposição de cálcio)', 'C');
    this.medMap.set('aciclovirXcloreto de potássio', 'C');
    this.medMap.set('aciclovirXclorpromazina', 'I');
    this.medMap.set('aciclovirXdantroleno', 'C');
    this.medMap.set('aciclovirXdexametasona', 'C');
    this.medMap.set('aciclovirXdiazepam', 'I');
    this.medMap.set('aciclovirXDOBUTamina', 'I');
    this.medMap.set('aciclovirXDOPamina', 'I');
    this.medMap.set('aciclovirXdroperidol', 'V');
    this.medMap.set('aciclovirXesmolol', 'I');
    this.medMap.set('aciclovirXfenitoína', 'I');
    this.medMap.set('aciclovirXfenobarbital', 'C');
    this.medMap.set('aciclovirXfentanil', 'C');
    this.medMap.set('aciclovirXfilgrastima', 'C');
    this.medMap.set('aciclovirXfluconazol', 'C');
    this.medMap.set('aciclovirXfosfato de potássio', 'I');
    this.medMap.set('aciclovirXfurosemida', 'C');
    this.medMap.set('aciclovirXgentamicina', 'V');
    this.medMap.set('aciclovirXgluconato de cálcio', 'C');
    this.medMap.set('aciclovirXhaloperidol', 'I');
    this.medMap.set('aciclovirXheparina', 'C');
    this.medMap.set('aciclovirXhidralazina', 'I');
    this.medMap.set('aciclovirXhidrocortisona', 'C');
    this.medMap.set('aciclovirXimipenem-cilastatina', 'C');
    this.medMap.set('aciclovirXinsulina regular', 'C');
    this.medMap.set('aciclovirXlevofloxacino', 'I');
    this.medMap.set('aciclovirXlidocaína', 'I');
    this.medMap.set('aciclovirXlinezolida', 'C');
    this.medMap.set('aciclovirXmanitol', 'C');
    this.medMap.set('aciclovirXmetilprednisolona', 'C');
    this.medMap.set('aciclovirXmetoclopramida', 'I');
    this.medMap.set('aciclovirXmetoprolol', 'C');
    this.medMap.set('aciclovirXmetronidazol', 'C');
    this.medMap.set('aciclovirXmidazolam', 'I');
    this.medMap.set('aciclovirXmilrinona', 'C');
    this.medMap.set('aciclovirXnaloxona', 'V');
    this.medMap.set('aciclovirXnitroGLICERINA', 'C');
    this.medMap.set('aciclovirXnitroPRUSSIATO de sódio', 'I');
    this.medMap.set('aciclovirXocitocina', 'C');
    this.medMap.set('aciclovirXoctreotida', 'C');
    this.medMap.set('aciclovirXondansetrona', 'I');
    this.medMap.set('aciclovirXoxacilina', 'C');
    this.medMap.set('aciclovirXpamidronato', 'C');
    this.medMap.set('aciclovirXpancurônio', 'C');
    this.medMap.set('aciclovirXpenicilina G potássica', 'C');
    this.medMap.set('aciclovirXpiperacilina-tazobactam', 'I');
    this.medMap.set('aciclovirXpolimixina B', 'C');
    this.medMap.set('aciclovirXpolivitamínico', 'C');
    this.medMap.set('aciclovirXprometazina', 'I');
    this.medMap.set('aciclovirXpropofol', 'C');
    this.medMap.set('aciclovirXranitidina', 'C');
    this.medMap.set('aciclovirXremifentanil', 'C');
    this.medMap.set('aciclovirXringer lactato', 'C');
    this.medMap.set('aciclovirXrocurônio', 'C');
    this.medMap.set('aciclovirXsuccinilcolina', 'C');
    this.medMap.set('aciclovirXsulfametoxazol-trimetoprima', 'C');
    this.medMap.set('aciclovirXsulfato de magnésio', 'C');
    this.medMap.set('aciclovirXtigeciclina', 'C');
    this.medMap.set('aciclovirXtiopental', 'C');
    this.medMap.set('aciclovirXvancomicina', 'C');
    this.medMap.set('aciclovirXVASopressina', 'C');
    this.medMap.set('aciclovirXvoriconazol', 'C');
    this.medMap.set('aciclovirXzidovudina', 'C');

    this.medMap.set('ácido tranexâmicoXampicilina', 'I')
    this.medMap.set('ácido tranexâmicoXampicilina-sulbactam', 'I')
    this.medMap.set('ácido tranexâmicoXheparina', 'C')
    this.medMap.set('ácido tranexâmicoXlidocaína', 'C')
    this.medMap.set('ácido tranexâmicoXpenicilina G potássica', 'I')
    this.medMap.set('ácido tranexâmicoXpiperacilina-tazobactam', 'I')

    this.medMap.set('adenosinaXringer lactato', 'C');

    this.medMap.set('adrenalinaXlidocaína', 'C');
    this.medMap.set('adrenalinaXringer lactato', 'C');

  }

  medicamento1change(e: any) {
    if(this.form.valid) {
      console.log(this.form.get('medicine1')?.value, this.form.get('medicine2')?.value);
      const key = this.getKey();
      console.log(key);
      console.log(this.medMap.get(key));

    }

  }

  getKey(): string {
    return this.form.get('medicine1')?.value +'X'+ this.form.get('medicine2')?.value;
  }

}
