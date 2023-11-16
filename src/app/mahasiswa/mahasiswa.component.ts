import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const $: any;

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit, AfterViewInit, OnDestroy {
  data: any;
  table1: any;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.initDataTable();
    this.bind_mahasiswa();
  }

  ngOnDestroy(): void {
    // Destroy the DataTable instance when the component is destroyed
    if ($.fn.DataTable.isDataTable('#table1')) {
      $('#table1').DataTable().destroy();
    }
  }

  initDataTable(): void {
    this.table1 = $('#table1').DataTable();
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  bind_mahasiswa(): void {
    this.http.get("https://stmikpontianak.net/011100862/tampilMahasiswa.php")
      .subscribe((data: any) => {
        console.log(data);

        // Clear existing rows before adding new ones
        this.table1.clear();

        data.forEach((element: any) => {
          var tempatTanggalLahir = element.TempatLahir + "," + element.TanggalLahir;

          var row = [
            element.NIM,
            element.Nama,
            element.JenisKelamin,
            tempatTanggalLahir,
            element.JP,
            element.Alamat,
            element.StatusNikah,
            element.TahunMasuk
          ];
          this.table1.row.add(row);
        });

        this.table1.draw(false);
      });
  }
}
