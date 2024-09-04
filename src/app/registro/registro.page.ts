import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  // Inicializa la propiedad en la declaración
  formularioRegistro: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmacionPassword: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Manejo de parámetros de consulta
    this.route.queryParams.subscribe(params => {
      console.log(params); // Maneja los parámetros aquí
    });
  }

  guardar() {
    if (this.formularioRegistro.valid) {
      const { nombre, password, confirmacionPassword } = this.formularioRegistro.value;
      if (password === confirmacionPassword) {
        // Lógica para guardar el registro
        console.log('Registro guardado:', { nombre, password });
        this.router.navigate(['/login']);
      } else {
        console.error('Las contraseñas no coinciden');
      }
    }
  }
}
