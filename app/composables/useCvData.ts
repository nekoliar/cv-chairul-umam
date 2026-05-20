export const useCvData = () => {
  const personal = {
    name: 'Chairul Umam Pelayati',
    role: 'Quality Control Staff',
    badge: 'Available for Opportunities',
    summary:
      'Profesional Quality Control dengan pengalaman komprehensif di industri FMCG, khususnya dalam pengujian bahan baku, kontrol proses, dan sistem manajemen mutu. Berpengalaman sebagai Staff QC di PT Sinar Sosro dan Pendamping Proses Produk Halal (PPH). Memiliki keahlian dalam kalibrasi alat laboratorium, GMP, HACCP, Food Safety, serta penggunaan aplikasi SAP.',
    email: 'umampelay@gmail.com',
    phone: '+62 813-8054-6997',
    location: 'Cikarang, Jawa Barat, Indonesia',
    linkedin: 'linkedin.com/in/chairul-umam-pelayati-a3ba19166',
  }

  const experiences = [
    {
      id: 1,
      title: 'Quality Control Staff (Incoming Material)',
      company: 'PT Sinar Sosro',
      period: 'Sep 2022 — Sekarang',
      location: 'Indonesia',
      bullets: [
        'Melakukan analisa dan inspeksi kedatangan bahan sesuai SOP dan standar mutu perusahaan maupun AQL.',
        'Membuat dan mengkomunikasikan laporan hasil analisa harian untuk diserahkan kepada Spv QC dan departemen terkait.',
        'Melakukan Released / Rejected Bahan sesuai hasil analisa.',
      ],
    },
    {
      id: 2,
      title: 'Quality Control Staff (Analis Proses & Inspektor Lapangan)',
      company: 'PT Sinar Sosro',
      period: '2016 — Ags 2022',
      location: 'Indonesia',
      bullets: [
        'Melakukan analisa harian untuk kontrol proses seperti water treatment, boiler water treatment, in process control product dan finish product.',
        'Melakukan analisa dan inspeksi proses produksi secara rutin di lapangan.',
        'Melakukan uji banding dengan mengirimkan sampel produk ke RnD untuk quality index.',
      ],
    },
    {
      id: 3,
      title: 'Pendamping Proses Produk Halal (P3H)',
      company: 'Halal Center Politeknik AKA Bogor',
      period: 'Nov 2023 — Sekarang',
      location: 'Bogor, Indonesia',
      bullets: [
        'Melakukan proses verifikasi dan validasi atas pernyataan kehalalan pelaku usaha pada proses produk halal.',
      ],
    },
    {
      id: 4,
      title: 'Magang (Bagian HSE)',
      company: 'PT Taisho Pharmaceutical Indonesia Tbk',
      period: 'Mar 2016 — Apr 2016',
      location: 'Indonesia',
      bullets: [
        'Mengidentifikasi limbah berdasarkan jenisnya.',
        'Melakukan analisa pencahayaan di tempat kerja.',
        'Melakukan penelitian dan menyusun laporan tugas akhir.',
      ],
    },
  ]

  const education = [
    {
      id: 1,
      degree: 'S1 Teknik Kimia',
      institution: 'Universitas Jayabaya',
      period: '2017 — 2018',
      gpa: 'IPK 3.26',
      description: 'Konsentrasi Teknik K3.',
    },
    {
      id: 2,
      degree: 'DIII Kimia Analisis',
      institution: 'Politeknik AKA Bogor',
      period: '2013 — 2016',
      gpa: 'IPK 2.98',
      description: 'Fokus pada analisis kimia dan operasional laboratorium.',
    },
  ]

  const certifications = [
    {
      id: 1,
      title: 'Pelatihan Pendamping PPH Sertifikasi Halal Self Declare BPJPH',
      issuer: 'Halal Center Politeknik AKA Bogor',
      date: 'November 2023',
    },
    {
      id: 2,
      title: 'English Academy (Explorer C dan D)',
      issuer: 'Ruang Guru',
      date: 'Juli 2022 - Jan 2023',
    },
    {
      id: 3,
      title: 'Systematic Troubleshooting Training & Package Integrity',
      issuer: 'PT Tetra Pack Indonesia',
      date: '2019 - 2020',
    },
    {
      id: 4,
      title: 'Training Awareness QMS',
      issuer: 'PT Centra Artha Prima Indonesia',
      date: 'Agustus 2019',
    },
    {
      id: 5,
      title: 'Refresh Supplier Quality Management System',
      issuer: 'PT Sinar Sosro',
      date: 'Juni 2019',
    },
    {
      id: 6,
      title: 'Kalibrasi Internal Termometer & Organoleptik',
      issuer: 'PT Sinar Sosro',
      date: '2017 - 2018',
    },
    {
      id: 7,
      title: 'Sistem Jaminan Halal',
      issuer: 'PT Sinar Sosro',
      date: 'Oktober 2017',
    },
  ]

  const technicalSkills = [
    { label: 'Penerapan GMP, HACCP & Food Safety', icon: 'lucide:shield-check' },
    { label: 'Pengujian Fisika & Kimia Bahan', icon: 'lucide:flask-conical' },
    { label: 'Kalibrasi pH meter & Turbidimeter', icon: 'lucide:gauge' },
    { label: 'Caliper & Micrometer', icon: 'lucide:wrench' },
    { label: 'Verifikasi & Validasi Produk Halal', icon: 'lucide:check-square' },
    { label: 'Aplikasi SAP Incoming Material', icon: 'lucide:database' },
    { label: 'Pengelolaan Data Analisa & Admin', icon: 'lucide:file-spreadsheet' },
    { label: 'Microsoft Office', icon: 'lucide:monitor' },
  ]

  const professionalSkills = [
    { label: 'Disiplin, Teliti, Cekatan & Kreatif', icon: 'lucide:zap' },
    { label: 'Kerjasama Tim & Individu', icon: 'lucide:users' },
    { label: 'Manajemen Waktu & Prioritas', icon: 'lucide:clock' },
    { label: 'Problem Solving', icon: 'lucide:lightbulb' },
    { label: 'Komunikasi Efektif', icon: 'lucide:message-circle' },
  ]

  return {
    personal,
    experiences,
    education,
    certifications,
    technicalSkills,
    professionalSkills,
  }
}
