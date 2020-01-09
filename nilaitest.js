function hitung() {
  const nilai = prompt('masukkan nilai', '60');
  let grade = '';
  let nilaiInt = parseInt(nilai);

  if (nilaiInt >= 90){
    grade = 'A';
  } else if (nilaiInt >= 80) {
    grade = 'B+';
  } else if (nilaiInt >= 70){
    grade = 'B';
  } else if (nilaiInt >= 60){
    grade = 'C+';
  } else if (nilaiInt >= 50){
    grade = 'C';
  } else {
    grade = 'F';
  };
  console.log(nilaiInt);
  console.log(grade);
}

hitung();

