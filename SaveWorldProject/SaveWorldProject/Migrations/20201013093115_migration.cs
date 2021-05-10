using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SaveWorldProject.Migrations
{
    public partial class migration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Countries");

            migrationBuilder.CreateTable(
                name: "columnCharts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Poluant = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Valoare = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_columnCharts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "continents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Continent = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Valoare = table.Column<int>(type: "int", nullable: false),
                    cod3 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_continents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "continentsData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    An = table.Column<int>(type: "int", nullable: false),
                    Continent = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Valoare = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_continentsData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "emissionsBySources",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Poluant = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Valoare = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_emissionsBySources", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "emissionsChart",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    An = table.Column<int>(type: "int", nullable: false),
                    MemberStates = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Valoare = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_emissionsChart", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "forestMaps",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    An = table.Column<int>(type: "int", nullable: false),
                    Valoare = table.Column<int>(type: "int", nullable: false),
                    cod3 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_forestMaps", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "pollutionDMaps",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    An = table.Column<int>(type: "int", nullable: false),
                    Valoare = table.Column<int>(type: "int", nullable: false),
                    cod3 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pollutionDMaps", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "pollutionMap2s",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Valoare = table.Column<int>(type: "int", nullable: false),
                    cod3 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pollutionMap2s", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "columnCharts");

            migrationBuilder.DropTable(
                name: "continents");

            migrationBuilder.DropTable(
                name: "continentsData");

            migrationBuilder.DropTable(
                name: "emissionsBySources");

            migrationBuilder.DropTable(
                name: "emissionsChart");

            migrationBuilder.DropTable(
                name: "forestMaps");

            migrationBuilder.DropTable(
                name: "pollutionDMaps");

            migrationBuilder.DropTable(
                name: "pollutionMap2s");

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    An = table.Column<int>(nullable: false),
                    Nume = table.Column<string>(nullable: true),
                    Valoare = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.Id);
                });
        }
    }
}
