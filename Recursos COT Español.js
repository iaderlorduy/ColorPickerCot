(function() {
    var n, t, i;
    Type.registerNamespace("Web");
    n=Web.DataViewResources= {}
    ;
    n.Common= {
        WaitHtml: '<div class="Wait"><\/div>'
    }
    ;
    n.Pager= {
        ItemsPerPage:"^ItemsPerPage^Items por página: ^ItemsPerPage^", PageSizes:[10, 15, 20, 25], ShowingItems:"^ShowingItems^Mostrando <b>{0}<\/b>-<b>{1}<\/b> de <b>{2}<\/b> items^ShowingItems^", SelectionInfo:" (<b>{0}<\/b> seleccionado)", Refresh: "^Refresh^Refrescar^Refresh^", Next: "^Next^Siguiente^Next^ »", Previous: "« ^Previous^Anterior^Previous^", Page: "^Page^Página^Page^", PageButtonCount: 10
    }
    ;
    n.ActionBar= {
        View: "^View^View^View^"
    }
    ;
    n.ModalPopup= {
        Close: "^Close^Cerrar^Close^", MaxWidth: 800, MaxHeight: 600, OkButton: "^OK^OK^OK^", CancelButton: "^Cancel^Cancelar^Cancel^", SaveButton: "^Save^Guardar^Save^", SaveAndNewButton: "^SaveAndNew^Guardar y Nuevo^SaveAndNew^"
    }
    ;
    n.Menu= {
        SiteActions: "^SiteActions^Acciones del Sitio^SiteActions^", SeeAlso: "^SeeAlso^Ver Tambien^SeeAlso^", Summary: "^Summary^Resumen^Summary^", Tasks: "^Tasks^Tareas^Tasks^", About: "^About^Acerca^About^"
    }
    ;
    n.HeaderFilter= {
        GenericSortAscending:"^GenericSortAscending^Ascendente^GenericSortAscending^", GenericSortDescending:"^GenericSortDescending^Descendente^GenericSortDescending^", StringSortAscending:"^StringSortAscending^Ascendente^StringSortAscending^", StringSortDescending:"^StringSortDescending^Descendente^StringSortDescending^", DateSortAscending:"^DateSortAscending^Ascendente^DateSortAscending^", DateSortDescending:"^DateSortDescending^Descendente^DateSortDescending^", EmptyValue:"^EmptyValue^(Vacío)^EmptyValue^", BlankValue:"^BlankValue^(En blanco)^BlankValue^", Loading:"^Loading^Cargando ...^Loading^", ClearFilter:"^ClearFilter^Borrar filtro de {0}^ClearFilter^", SortBy:"^SortBy^Ordenar por {0}^SortBy^", MaxSampleTextLen: 80, CustomFilterOption: "^CustomFilterOption^Filtro ...^CustomFilterOption^"
    }
    ;
    n.InfoBar= {
        FilterApplied:"^FilterApplied^Se ha aplicado un filtro.^FilterApplied^", ValueIs:' <span class="Highlight">{0}<\/span> ', Or: " ^InfoBarOr^o^InfoBarOr^ ", And: " ^InfoBarAnd^y^InfoBarAnd^ ", EqualTo: "^InfoBarEqualTo^es igual a^InfoBarEqualTo^ ", LessThan: "^InfoBarLessThan^es menor que^InfoBarLessThan^ ", LessThanOrEqual: "^InfoBarLessThanOrEqual^es menor o igual a^InfoBarLessThanOrEqual^ ", GreaterThan: "^InfoBarGreaterThan^mayor que^InfoBarGreaterThan^ ", GreaterThanOrEqual: "^InfoBarGreaterThanOrEqual^es mayor o igual que^InfoBarGreaterThanOrEqual^ ", Like: "^InfoBarLike^es como^InfoBarLike^ ", StartsWith: "^InfoBarStartsWith^comienza con^InfoBarStartsWith^ ", Empty: "^InfoBarEmpty^Vacío^InfoBarEmpty^", QuickFind: " ^InfoBarQuickFind^Cualquier campo contiene^InfoBarQuickFind^ "
    }
    ;
    n.Lookup= {
        SelectToolTip:"^SelectToolTip^Seleccione {0}^SelectToolTip^", ClearToolTip:"^ClearToolTip^Borrar {0}^ClearToolTip^", NewToolTip:"^NewToolTip^Agregar {0}^NewToolTip^", SelectLink:"^SelectLink^(Seleccionar)^SelectLink^", ShowActionBar:!0, DetailsToolTip:"^DetailsToolTip^Ver detalles de <b>{0}</b>^DetailsToolTip^", ShowDetailsInPopup: !0, GenericNewToolTip: "^GenericNewToolTip^Crear Nuevo^GenericNewToolTip^"
    }
    ;
    n.Validator= {
        Required: "^Required^Requerido^Required^", RequiredField: "^RequiredField^Este Campo es Requerido^RequiredField^", EnforceRequiredFieldsWithDefaultValue: !1, NumberIsExpected: "^NumberIsExpected^Se requiere un número.^NumberIsExpected^", BooleanIsExpected: "^BooleanIsExpected^Se requiere un valor lógico.^BooleanIsExpected^", DateIsExpected: "^DateIsExpected^Se espera una fecha.^DateIsExpected^"
    }
    ;
    t=Sys.CultureInfo.CurrentCulture.dateTimeFormat.MonthNames;
    n.Data= {
        ConnectionLost: "^ConnectionLost^La conexión de red se ha perdido. Inténtelo de nuevo?^ConnectionLost^", NullValue: '<span class="NA">^NullValue^n/a^NullValue^<\/span>', NullValueInForms: "^NullValueInForms^N/A^NullValueInForms^", BooleanDefaultStyle: "DropDownList", BooleanOptionalDefaultItems: [[null, "^NullValueInForms^N/A^NullValueInForms^"], [!1, "^No^No^No^"], [!0, "^Yes^Si^Yes^"]], BooleanDefaultItems: [[!1, "^No^No^No^"], [!0, "^Yes^Si^Yes^"]], MaxReadOnlyStringLen: 600, NoRecords: "^NoRecords^No se han encontrado.^NoRecords^", BlobHandler: "Blob.ashx", BlobDownloadLink: "^BlobDownloadLink^Descargar^BlobDownloadLink^", BlobDownloadLinkReadOnly: '<span style="color:gray;">^BlobDownloadLink^download^BlobDownloadLink^<\/span>', BlobDownloadHint:"^BlobDownloadHint^Haga clic aquí para descargar el archivo original.^BlobDownloadHint^", BatchUpdate:"^BatchUpdate^actualización^BatchUpdate^", NoteEditLabel:"^NoteEditLabel^editar^NoteEditLabel^", NoteDeleteLabel:"^NoteDeleteLabel^borrar^NoteDeleteLabel^", NoteDeleteConfirm:"^NoteDeleteConfirm^Borrar?^NoteDeleteConfirm^", UseLEV:'^UseLEV^Pega "{0}"^UseLEV^', Import: {
            UploadInstruction:"^ImportUploadInstruction^Por favor, seleccione el archivo a subir. El archivo debe estar en formato <b>CSV</b>, <b>XLS</b> o <b>XLSX</b>.^ImportUploadInstruction^", DownloadTemplate:"^ImportDownloadTemplate^Descargar plantilla de importación de archivos.^ImportDownloadTemplate^", Uploading:"^ImportUploading^Su archivo está siendo cargado en el servidor. Por favor espere ...^ImportUploading^", MappingInstruction:"^ImportMappingInstruction^Hay <b>{0}</b> (s) registro(s) en el archivo <b>{1}</b> listo(s) para ser procesados.<br/>Por favor asigne los campos de importación del archivo de datos a los campos correspondientes en la aplicación y haga clic en <i>Importar</i> para iniciar el procesamiento.^ImportMappingInstruction^", StartButton: "^ImportStartButton^Importación^ImportStartButton^", AutoDetect: "^ImportAutoDetect^(Detección automática)^ImportAutoDetect^", Processing: "^ImportProcessing^El proceso de importación de archivos se ha iniciado. El registro de importación de datos estará disponible tras el procesamiento exitoso. Es posible que tenga que actualizar los puntos de vista o las páginas relevantes para ver los registros importados.^ImportProcessing^", Email: "^ImportEmail^Enviar registro de importación a los siguientes correos electrónicos (opcional)^ImportEmail^", EmailNotSpecified: "^ImportEmailNotSpecified^Destinatario del registro de importación no ha sido especificado. Continuar de todos modos?^ImportEmailNotSpecified^"
        }
        , Filters: {
            Labels: {
                And: "^FilterLabelAnd^y^FilterLabelAnd^", Or: "^FilterLabelOr^o^FilterLabelOr^", Equals: "^FilterLabelEquals^Igual^FilterLabelEquals^", Clear: "^FilterLabelClear^Borrar^FilterLabelClear^", SelectAll: "^FilterLabelSelectAll^(Seleccionar todo)^FilterLabelSelectAll^", Includes: "^FilterLabelIncludes^incluye^FilterLabelIncludes^", FilterToolTip: "^FilterLabelFilterToolTip^Cambio^FilterLabelFilterToolTip^"
            }
            , Number: {
                Text:"^NumberFilterText^Filtros de números^NumberFilterText^", Kind:"^Number^Número^Number^", List:[ {
                    Function: "=", Text: "^Equals^Igual^Equals^", Prompt: !0
                }
                , {
                    Function: "<>", Text: "^DoesNotEqual^No es igual a^DoesNotEqual^", Prompt: !0
                }
                , {
                    Function: "<", Text: "^LessThan^Menor que^LessThan^", Prompt: !0
                }
                , {
                    Function: ">", Text: "^GreaterThan^Mayor que^GreaterThan^", Prompt: !0
                }
                , {
                    Function: "<=", Text: "^LessThanOrEqual^es menor o igual a^LessThanOrEqual^", Prompt: !0
                }
                , {
                    Function: ">=", Text: "^GreateThanOrEqual^es mayor o igual a^GreateThanOrEqual^", Prompt: !0
                }
                , {
                    Function: "$between", Text: "^Between^Entre^Between^", Prompt: !0
                }
                , {
                    Function: "$in", Text: "^Includes^Incluye^Includes^", Prompt: !0, Hidden: !0
                }
                , {
                    Function: "$notin", Text: "^DoesNotInclude^No incluye^DoesNotInclude^", Prompt: !0, Hidden: !0
                }
                , {
                    Function: "$isnotempty", Text: "^NotEmpty^No Vacío^NotEmpty^"
                }
                , {
                    Function: "$isempty", Text: "^Empty^Vacío^Empty^"
                }
                ]
            }
            , Text: {
                Text:"^TextFilterText^Filtros de texto^TextFilterText^", Kind:"^Text^Texto^Text^", List:[ {
                    Function: "=", Text: "^Equals^Igual^Equals^", Prompt: !0
                }
                , {
                    Function: "<>", Text: "^DoesNotEqual^No es igual a^DoesNotEqual^", Prompt: !0
                }
                , {
                    Function: "$beginswith", Text: "^BeginsWith^Comienza con^BeginsWith^", Prompt: !0
                }
                , {
                    Function: "$doesnotbeginwith", Text: "^DoesNotBeginWith^No comienza con^DoesNotBeginWith^", Prompt: !0
                }
                , {
                    Function: "$contains", Text: "^Contains^Contiene^Contains^", Prompt: !0
                }
                , {
                    Function: "$doesnotcontain", Text: "^DoesNotContain^No Contiene^DoesNotContain^", Prompt: !0
                }
                , {
                    Function: "$endswith", Text: "^EndsWith^Termina con^EndsWith^", Prompt: !0
                }
                , {
                    Function: "$doesnotendwith", Text: "^DoesNotEndWith^No termina con^DoesNotEndWith^", Prompt: !0
                }
                , {
                    Function: "$in", Text: "^Includes^Incluye^Includes^", Prompt: !0, Hidden: !0
                }
                , {
                    Function: "$notin", Text: "^DoesNotInclude^No Incluye^DoesNotInclude^", Prompt: !0, Hidden: !0
                }
                , {
                    Function: "$isnotempty", Text: "^NotEmpty^No Vacío^NotEmpty^"
                }
                , {
                    Function: "$isempty", Text: "^Empty^Vacío^Empty^"
                }
                ]
            }
            , Boolean: {
                Text:"^BooleanFilterText^Filtros de lógica^BooleanFilterText^", Kind:"^Logical^Lógica^Logical^", List:[ {
                    Function: "$true", Text: "^Yes^Si^Yes^"
                }
                , {
                    Function: "$false", Text: "^No^No^No^"
                }
                , {
                    Function: "$isnotempty", Text: "^NotEmpty^No Vacío^NotEmpty^"
                }
                , {
                    Function: "$isempty", Text: "^Empty^Vacío^Empty^"
                }
                ]
            }
            , Date: {
                Text:"^DateFilterText^Filtros de Fecha^DateFilterText^", Kind:"^Date^Fecha^Date^", List:[ {
                    Function: "=", Text: "^Equals^Igual^Equals^", Prompt: !0
                }
                , {
                    Function: "<>", Text: "^DoesNotEqual^No es igual a^DoesNotEqual^", Prompt: !0
                }
                , {
                    Function: "<", Text: "^Before^Antes^Before^", Prompt: !0
                }
                , {
                    Function: ">", Text: "^After^después^After^", Prompt: !0
                }
                , {
                    Function: "<=", Text: "^OnOrBefore^El o antes^OnOrBefore^", Prompt: !0
                }
                , {
                    Function: ">=", Text: "^OnOrAfter^El o después^OnOrAfter^", Prompt: !0
                }
                , {
                    Function: "$between", Text: "^Between^Entre^Between^", Prompt: !0
                }
                , {
                    Function: "$in", Text: "^Includes^Includes^Includes^", Prompt: !0, Hidden: !0
                }
                , {
                    Function: "$notin", Text: "^DoesNotInclude^No Incluye^DoesNotInclude^", Prompt: !0, Hidden: !0
                }
                , {
                    Function: "$isnotempty", Text: "^NotEmpty^No Vacío^NotEmpty^"
                }
                , {
                    Function: "$isempty", Text: "^Empty^Vacío^Empty^"
                }
                , null, {
                    Function: "$tomorrow", Text: "^Tomorrow^Mañana^Tomorrow^"
                }
                , {
                    Function: "$today", Text: "^Today^Hoy^Today^"
                }
                , {
                    Function: "$yesterday", Text: "^Yesterday^Ayer^Yesterday^"
                }
                , null, {
                    Function: "$nextweek", Text: "^NextWeek^La próxima semana^NextWeek^"
                }
                , {
				Function: "$thisweek", Text: "^ThisWeek^Esta semana^ThisWeek^"
                }
                , {
                    Function: "$lastweek", Text: "^LastWeek^Semana pasada^LastWeek^"
                }
                , null, {
                    Function: "$nextmonth", Text: "^NextMonth^El próximo mes^NextMonth^"
                }
                , {
                    Function: "$thismonth", Text: "^ThisMonth^Este mes^ThisMonth^"
                }
                , {
                    Function: "$lastmonth", Text: "^LastMonth^Mes pasado^LastMonth^"
                }
                , null, {
                    Function: "$nextquarter", Text: "^NextQuarter^El próximo trimestre^NextQuarter^"
                }
                , {
                    Function: "$thisquarter", Text: "^ThisQuarter^Este trimestre^ThisQuarter^"
                }
                , {
                    Function: "$lastquarter", Text: "^LastQuarter^Trimestre pasado^LastQuarter^"
                }
                , null, {
                    Function: "$nextyear", Text: "^NextYear^El próximo año^NextYear^"
                }
                , {
                    Function: "$thisyear", Text: "^ThisYear^Este año^ThisYear^"
                }
                , {
                    Function: "$yeartodate", Text: "^YearToDate^Año a la Fecha^YearToDate^"
                }
                , {
                    Function: "$lastyear", Text: "^LastYear^Año pasado^LastYear^"
                }
                , null, {
                    Function: "$past", Text: "^Past^Pasado^Past^"
                }
                , {
                    Function: "$future", Text: "^Future^Futuro^Future^"
                }
                , null, {
                    Text:"^AllDatesInPreriod^Todas las fechas en el período^AllDatesInPreriod^", List:[ {
                        Function: "$quarter1", Text: "^Quarter1^1er trimestre^Quarter1^"
                    }
                    , {
                        Function: "$quarter2", Text: "^Quarter2^2do trimestre^Quarter2^"
                    }
                    , {
                        Function: "$quarter3", Text: "^Quarter3^3er trimestre^Quarter3^"
                    }
                    , {
                        Function: "$quarter4", Text: "^Quarter4^4to trimestre^Quarter4^"
                    }
                    , null, {
                        Function: "$month1", Text: t[0]
                    }
                    , {
                        Function: "$month2", Text: t[1]
                    }
                    , {
                        Function: "$month3", Text: t[2]
                    }
                    , {
                        Function: "$month4", Text: t[3]
                    }
                    , {
                        Function: "$month5", Text: t[4]
                    }
                    , {
                        Function: "$month6", Text: t[5]
                    }
                    , {
                        Function: "$month7", Text: t[6]
                    }
                    , {
                        Function: "$month8", Text: t[7]
                    }
                    , {
                        Function: "$month9", Text: t[8]
                    }
                    , {
                        Function: "$month10", Text: t[9]
                    }
                    , {
                        Function: "$month11", Text: t[10]
                    }
                    , {
                        Function: "$month12", Text: t[11]
                    }
                    ]
                }
                ]
            }
        }
    }
    ;
    n.Form= {
        ShowActionBar: !0, ShowCalendarButton: !0, RequiredFieldMarker: '<span class="Required">*<\/span>', RequiredFiledMarkerFootnote: "* - ^RequiredFiledMarkerFootNote^indica un campo obligatorio^RequiredFiledMarkerFootNote^", SingleButtonRowFieldLimit: 7, GeneralTabText: "^GeneralTabText^General^GeneralTabText^", Minimize: "^Minimize^Minimizar^Minimize^", Maximize: "^Maximize^Maximizar^Maximize^"
    }
    ;
    n.Grid= {
        InPlaceEditContextMenuEnabled:!0, QuickFindText:"^QuickFindText^Búsqueda Rápida^QuickFindText^", QuickFindToolTip:"^QuickFindToolTip^Escriba lo que usted quiera buscar y pulse Enter^QuickFindToolTip^", ShowAdvancedSearch:"^ShowAdvancedSearch^Mostrar Búsqueda Avanzada^ShowAdvancedSearch^", VisibleSearchBarFields:3, DeleteSearchBarField:"^DeleteSearchBarField^(Borrar)^DeleteSearchBarField^", HideAdvancedSearch:"^HideAdvancedSearch^Ocultar Búsqueda Avanzada^HideAdvancedSearch^", PerformAdvancedSearch:"^PerformAdvancedSearch^Buscar^PerformAdvancedSearch^", ResetAdvancedSearch:"^ResetAdvancedSearch^Resetear^ResetAdvancedSearch^", NewRowLink:"^NewRowLink^Haga clic aquí para agregar un registro nuevo.^NewRowLink^", RootNodeText:"^RootNodeText^Nivel superior^RootNodeText^", FlatTreeToggle:"^FlatTreeToggle^Cambiar a Jerarquía^FlatTreeToggle^", HierarchyTreeModeToggle:"^HierarchyTreeModeToggle^Cambiar a Lista simple^HierarchyTreeModeToggle^", AddConditionText:"^AddConditionText^Añadir condición de búsqueda^AddConditionText^", AddCondition:"^AddCondition^Agregar condición^AddCondition^", RemoveCondition:"^RemoveCondition^Quitar condición^RemoveCondition^", ActionColumnHeaderText:"^ActionBarActionsHeaderText^Acciones^ActionBarActionsHeaderText^", Aggregates: {
            None: {
                FmtStr: "", ToolTip: ""
            }
            , Sum: {
                FmtStr:"^SumAggregate^Suma: {0}^SumAggregate^", ToolTip:"^SumAggregateToolTip^Suma de {0}^SumAggregateToolTip^"
            }
            , Count: {
                FmtStr:"^CountAggregate^Conteo: {0}^CountAggregate^", ToolTip:"^CountAggregateToolTip^Conteo de {0}^CountAggregateToolTip^"
            }
            , Avg: {
                FmtStr:"^AvgAggregate^Promedio: {0}^AvgAggregate^", ToolTip:"^AvgAggregateToolTip^Promedio de {0}^AvgAggregateToolTip^"
            }
            , Max: {
                FmtStr:"^MaxAggregate^Max: {0}^MaxAggregate^", ToolTip:"^MaxAggregateToolTip^Máximo de {0}^MaxAggregateToolTip^"
            }
            , Min: {
                FmtStr:"^MinAggregate^Min: {0}^MinAggregate^", ToolTip:"^MinAggregateToolTip^Minimo de {0}^MinAggregateToolTip^"
            }
        }
        , Freeze:"^Freeze^Congelar^Freeze^", Unfreeze:"^Unfreeze^Descongelar^Unfreeze^"
    }
    ;
    n.Views= {
        DefaultDescriptions: {
            $DefaultGridViewDescription:"^DefaultGridViewDescription^Esta es la lista de <b>{0}</b>.^DefaultGridViewDescription^", $DefaultEditViewDescription:"^DefaultEditViewDescription^Por favor revise la información de <b>{0}</b> a continuación. Haga clic en <b>Editar</b> para cambiar este registro, haga clic en <b>Borrar</b> para eliminar el registro, o haga clic en <b>Cancelar/Cerrar</b> para volver a la página anterior.^DefaultEditViewDescription^", $DefaultCreateViewDescription:"^DefaultCreateViewDescription^Por favor, llene este formato y haga clic en el botón <b>Aceptar</b> para crear un registro nuevo de <b>{0}</b>. Haga clic en <b>Cancelar</b> para volver a la pantalla anterior.^DefaultCreateViewDescription^"
        }
        , DefaultCategoryDescriptions: {
            $DefaultEditDescription:"^DefaultEditDescription^Estos son los campos del registro de <b>{0}</b> que se pueden editar.^DefaultEditDescription^", $DefaultNewDescription:"^DefaultNewDescription^Llene el formato a continuación. Asegúrese de entrar todos los campos obligatorios.^DefaultNewDescription^", $DefaultReferenceDescription:"^DefaultReferenceDescription^La sección de información de referencia muestra detalles adicionales de <b>{0}</b>.^DefaultReferenceDescription^"
        }
    }
    ;
    n.Actions= {
        Scopes: {
            Grid: {
                Select: {
                    HeaderText: "^SelectActionHeaderText^Seleccionar^SelectActionHeaderText^"
                }
                , Edit: {
                    HeaderText: "^EditActionHeaderText^Editar^EditActionHeaderText^"
                }
                , Delete: {
                    HeaderText: "^DeleteActionHeaderText^Borrar^DeleteActionHeaderText^", Confirmation: "^DeleteActionConfirmation^Borrar?^DeleteActionConfirmation^"
                }
                , Select: {
                    HeaderText: "^SelectActionHeaderText^Seleccionar^SelectActionHeaderText^"
                }
                , Duplicate: {
                    HeaderText: "^DuplicateActionHeaderText^Duplicar^DuplicateActionHeaderText^"
                }
                , New: {
                    HeaderText: "^NewActionHeaderText^Nuevo^NewActionHeaderText^"
                }
                , BatchEdit: {
                    HeaderText:"^BatchEditActionHeaderText^Edición por lotes^BatchEditActionHeaderText^", CommandArgument: {
                        editForm1: {
                            HeaderText: "^BatchEditInFormActionHeaderText^Edición por lotes (formato)^BatchEditInFormActionHeaderText^"
                        }
                    }
                }
                , Open: {
                    HeaderText: "^OpenActionHeaderText^Abrir^OpenActionHeaderText^"
                }
            }
            , Form: {
                Edit: {
                    HeaderText: "^EditActionHeaderText^Editar^EditActionHeaderText^"
                }
                , Delete: {
                    HeaderText: "^DeleteActionHeaderText^Borrar^DeleteActionHeaderText^", Confirmation: "^DeleteActionConfirmation^Borrar?^DeleteActionConfirmation^"
                }
                , Cancel: {
                    HeaderText:"^DefaultCancelActionHeaderText^Cerrar^DefaultCancelActionHeaderText^", WhenLastCommandName: {
                        Duplicate: {
                            HeaderText: "^EditModeCancelActionHeaderText^Cancelar^EditModeCancelActionHeaderText^"
                        }
                        , Edit: {
                            HeaderText: "^EditModeCancelActionHeaderText^Cancelar^EditModeCancelActionHeaderText^"
                        }
                        , New: {
                            HeaderText: "^EditModeCancelActionHeaderText^Cancelar^EditModeCancelActionHeaderText^"
                        }
                    }
                }
                , Update: {
                    HeaderText:"^UpdateActionHeaderText^Aceptar^UpdateActionHeaderText^", WhenLastCommandName: {
                        BatchEdit: {
                            HeaderText: "^UpdateActionInBatchModeHeaderText^Actualización de la Selección^UpdateActionInBatchModeHeaderText^", Confirmation: "^UpdateActionInBatchModeConfirmation^Actualizar?^UpdateActionInBatchModeConfirmation^"
                        }
                    }
                }
                , Insert: {
                    HeaderText: "^InsertActionHeaderText^Aceptar^InsertActionHeaderText^"
                }
                , Confirm: {
                    HeaderText: "^UpdateActionHeaderText^Aceptar^UpdateActionHeaderText^"
                }
            }
            , ActionBar: {
                _Self: {
                    Actions: {
                        HeaderText: "^ActionBarActionsHeaderText^Acciones^ActionBarActionsHeaderText^"
                    }
                    , Report: {
                        HeaderText: "^ActionBarReportHeaderText^Reporte^ActionBarReportHeaderText^"
                    }
                    , Record: {
                        HeaderText: "^ActionBarRecordHeaderText^Registro^ActionBarRecordHeaderText^"
                    }
                }
                , New: {
                    HeaderText:"^ActionBarNewHeaderText^Agregar {0}^ActionBarNewHeaderText^", Description:"^ActionBarNewHeaderDescription^Crear un registro nuevo de {0}.^ActionBarNewHeaderDescription^", HeaderText2: "^ActionBarNewHeaderText2^Agregar^ActionBarNewHeaderText2^", VarMaxLen: 15
                }
                , Edit: {
                    HeaderText: "^EditActionHeaderText^Editar^EditActionHeaderText^"
                }
                , Delete: {
                    HeaderText: "^DeleteActionHeaderText^Borrar^DeleteActionHeaderText^", Confirmation: "^DeleteActionConfirmation^Borrar?^DeleteActionConfirmation^"
                }
                , ExportCsv: {
                    HeaderText: "^ExportCsvActionHeaderText^Descargar^ExportCsvActionHeaderText^", Description: "^ExportCsvActionDescription^Descargar elementos en formato CSV.^ExportCsvActionDescription^"
                }
                , ExportRowset: {
                    HeaderText: "^ExportRowsetActionHeaderText^Exportar a hoja de cálculo^ExportRowsetActionHeaderText^", Description: "^ExportRowsetActionDescription^Analizar los elementos con una aplicación<br/>de hoja de cálculo.^ExportRowsetActionDescription^"
                }
                , ExportRss: {
                    HeaderText: "^ExportRssActionHeaderText^Exportar a RSS^ExportRssActionHeaderText^", Description: "^ExportRssActionDescription^Distribuir los elementos con un lector de RSS.^ExportRssActionDescription^"
                }
                , Import: {
                    HeaderText: "^ImportActionHeaderText^Importar desde archivo^ImportActionHeaderText^", Description: "^ImportActionDescription^Subir un archivo CSV, XLS, XLSX con registros para<br/>importar.^ImportActionDescription^"
                }
                , Update: {
                    HeaderText: "^ActionBarUpdateActionHeaderText^Guardar^ActionBarUpdateActionHeaderText^", Description: "^ActionBarUpdateActionDescription^Guardar los cambios en la base de datos.^ActionBarUpdateActionDescription^"
                }
                , Insert: {
                    HeaderText: "^ActionBarInsertActionHeaderText^Guardar^ActionBarInsertActionHeaderText^", Description: "^ActionBarInsertActionDescription^Guardar los nuevos registros en la base de datos.^ActionBarInsertActionDescription^"
                }
                , Cancel: {
                    HeaderText:"^ActionBarCancelActionHeaderText^Cancelar^ActionBarCancelActionHeaderText^", WhenLastCommandName: {
                        Edit: {
                            HeaderText: "^ActionBarCancelActionHeaderText^Cancelar^ActionBarCancelActionHeaderText^", Description: "^ActionBarCancelWhenEditActionDescription^Cancelar todos los cambios de registro.^ActionBarCancelWhenEditActionDescription^"
                        }
                        , New: {
                            HeaderText: "^ActionBarCancelActionHeaderText^Cancelar^ActionBarCancelActionHeaderText^", Description: "^ActionBarCancelWhenNewActionDescription^Cancelar nuevo registro.^ActionBarCancelWhenNewActionDescription^"
                        }
                    }
                }
                , Report: {
                    HeaderText: "^ReportActionHeaderText^Reporte^ReportActionHeaderText^", Description: "^ReportActionDescription^Generar un reporte en formato PDF^ReportActionDescription^"
                }
                , ReportAsPdf: {
                    HeaderText: "^ReportAsPdfActionHeaderText^Documento PDF^ReportAsPdfActionHeaderText^", Description: "^ReportAsPdfActionDescription^Ver artículos como documento de Adobe PDF.^"
                }
                , ReportAsImage: {
                    HeaderText: "^ReportAsImageActionHeaderText^Imagen de varias páginas^ReportAsImageActionHeaderText^", Description: "^ReportAsImageActionDescription^Ver artículos como una imagen TIFF de varias páginas.^ReportAsImageActionDescription^"
                }
                , ReportAsExcel: {
                    HeaderText: "^ReportAsExcelActionHeaderText^Hoja de cálculo^ReportAsExcelActionHeaderText^", Description: "^ReportAsExcelActionDescription^Ver los elementos en una hoja de cálculo en formato <br/>de Microsoft Excel.^ReportAsExcelActionDescription^"
                }
                , ReportAsWord: {
                    HeaderText: "^ReportAsWordActionHeaderText^Microsoft Word^ReportAsWordActionHeaderText^", Description: "^ReportAsWordActionDescription^Ver los elementos en un documento fromateado <br/>en Microsoft Word.^ReportAsWordActionDescription^"
                }
                , DataSheet: {
                    HeaderText: "^DataSheetActionHeaderText^Mostrar la hoja de cálculo^DataSheetActionHeaderText^", Description: "^DataSheetActionDescription^Elementos de la pantalla utilizando un formato de hoja de cálculo.^DataSheetActionDescription^"
                }
                , Grid: {
                    HeaderText: "^GridActionHeaderText^Mostrar en vista estándar^GridActionHeaderText^", Description: "^GridActionDescription^Elementos de la pantalla en formato de tabla<br/>estándar.^"
                }
                , Tree: {
                    HeaderText: "^TreeActionHeaderText^Mostrar la Jerarquía^TreeActionHeaderText^", Description: "^TreeActionDescription^Mostrar las relaciones jerárquicas.^TreeActionDescription^"
                }
                , Search: {
                    HeaderText:"^PerformAdvancedSearch^Búsqueda^PerformAdvancedSearch^", Description:"^PerformAdvancedSearch^Búsqueda^PerformAdvancedSearch^ {0}"
                }
            }
            , Row: {
                Update: {
                    HeaderText:"^RowUpdateActionHeaderText^Guardar^RowUpdateActionHeaderText^", WhenLastCommandName: {
                        BatchEdit: {
                            HeaderText: "^RowUpdateWhenBatchEditActionHeaderText^Actualización de la Selección^RowUpdateWhenBatchEditActionHeaderText^", Confirmation: "^RowUpdateWhenBatchEditActionConfirmation^Actualizar?^RowUpdateWhenBatchEditActionConfirmation^"
                        }
                    }
                }
                , Insert: {
                    HeaderText: "^RowInsertActionHeaderText^Insertar^RowInsertActionHeaderText^"
                }
                , Cancel: {
                    HeaderText: "^RowCancelActionHeaderText^Cancelar^RowCancelActionHeaderText^"
                }
            }
            , ActionColumn: {
                Edit: {
                    HeaderText: "^EditActionHeaderText^Editar^EditActionHeaderText^"
                }
                , Delete: {
                    HeaderText: "^DeleteActionHeaderText^Borrar^DeleteActionHeaderText^", Confirmation: "^DeleteActionConfirmation^Borrar?^DeleteActionConfirmation^"
                }
            }
        }
    }
    ;
    n.Editor= {
        Undo: "^Undo^Undo^Undo^", Redo: "^Redo^Redo^Redo^", Bold: "^Bold^Bold^Bold^", Italic: "^Italic^Italic^Italic^", Underline: "^Underline^Underline^Underline^", Strikethrough: "^StrikeThrough^Strike Through^StrikeThrough^", Subscript: "^Subscript^Sub Script^Subscript^", Superscript: "^Superscript^Super Script^Superscript^", JustifyLeft: "^JustifyLeft^Justify Left^JustifyLeft^", JustifyCenter: "^JustifyCenter^Justify Center^JustifyCenter^", JustifyRight: "^JustifyRight^Justify Right^JustifyRight^", JustifyFull: "^JustifyFull^Justify Full^JustifyFull^", InsertOrderedList: "^InsertOrderedList^Insert Ordered List^InsertOrderedList^", InsertUnorderedList: "^InsertUnorderedList^Insert Unordered List^InsertUnorderedList^", CreateLink: "^CreateLink^Create Link^CreateLink^", UnLink: "^UnLink^Unlink^UnLink^", RemoveFormat: "^RemoveFormat^Remove Format^RemoveFormat^", SelectAll: "^SelectAll^Select All^SelectAll^", UnSelect: "^UnSelect^Unselect^UnSelect^", Delete: "^Delete^Borrar^Delete^", Cut: "^Cut^Cut^Cut^", Copy: "^Copy^Copiar^Copy^", Paste: "^Paste^Pegar^Paste^", BackColor: "^BackColor^Back Color^BackColor^", ForeColor: "^ForeColor^Fore Color^ForeColor^", FontName: "^FontName^Font Name^FontName^", FontSize: "^FontSize^Font Size^FontSize^", Indent: "^Indent^Indent^Indent^", Outdent: "^Outdent^Outdent^Outdent^", InsertHorizontalRule: "^InsertHorizontalRule^Insert Horizontal Rule^InsertHorizontalRule^", HorizontalSeparator: "^Separator^Separator^Separator^"
    }
    ;
    n.Mobile= {
        UpOneLevel:"^UpOneLevel^Up One Level^UpOneLevel^", Back:"^Back^Back^Back^", Sort:"^Sort^Sort^Sort^", SortByField:"^SortByField^Select a field to change the sort order of <b>{0}<\/b>.^SortByField^", SortByOptions:"^SortByOptions^Select the sort order of <b>{0}<\/b> by the field <b>{1}<\/b> in the list of options below.^SortByOptions^", DefaultOption:"^DefaultOption^Default^DefaultOption^", Auto:"^Auto^Auto^Auto^", Filter:"^Filter^Filter^Filter^", List:"^ListViewStyle^List^ListViewStyle^", Cards:"^Cards^Cards^Cards^", Grid:"^Grid^Grid^Grid^", Map:"^Map^Map^Map^", Calendar:"^Calendar^Calendar^Calendar^", ZoomIn:"^ZoomIn^Zoom in^ZoomIn^", ZoomOut:"^ZoomOut^Zoom out^ZoomOut^", Directions:"^Directions^Directions^Directions^", AlternativeView:"^AlternativeView^Select an alternative view of data.^AlternativeView^", PresentationStyle:"^PresentationStyle^Select a data presentation style.^PresentationStyle^", LookupViewAction:"^View^View^View^", LookupSelectAction:"^SelectActionHeaderText^Select^SelectActionHeaderText^", LookupClearAction:"^FilterLabelClear^Clear^FilterLabelClear^", LookupNewAction:"^NewActionHeaderText^New^NewActionHeaderText^", LookupInstruction:"^LookupInstruction^Please select <b>{0}<\/b> in the list. ^LookupInstruction^", LookupOriginalSelection:'^LookupOriginalSelection^The original selection is <b>"{0}"<\/b>. ^LookupOriginalSelection^', EmptyContext:"^EmptyContext^Actions are not available.^EmptyContext^", Favorites:"^Favorites^Favorites^Favorites^", History:"^History^History^History^", FilterSiteMap:"^FilterSiteMap^Filter site map...^FilterSiteMap^", ResumeLookup:"^ResumeLookup^Resume Lookup^ResumeLookup^", ResumeEntering:"^ResumeEntering^Resume Entering^ResumeEntering^", ResumeEditing:"^ResumeEditing^Resume Editing^ResumeEditing^", ResumeBrowsing:"^ResumeBrowsing^Resume Browsing^ResumeBrowsing^", ResumeViewing:"^ResumeViewing^Resume Viewing^ResumeViewing^", Menu:"^Menu^Menu^Menu^", Home:"^Home^Home^Home^", Settings:"^Settings^Settings^Settings^", Sidebar:"^Sidebar^Sidebar^Sidebar^", Landscape:"^Landscape^Landscape^Landscape^", Portrait:"^Portrait^Portrait^Portrait^", Never:"^Never^Never^Never^", Always:"^Always^Always^Always^", ButtonShapes:"^ButtonShapes^Button Shapes^ButtonShapes^", PromoteActions:"^PromoteActions^Promote Actions^PromoteActions^", ConfirmReload:"^ConfirmReload^Reload?^ConfirmReload^", ClearText:"^ClearText^Clear Text^ClearText^", SeeAll:"^SeeAll^See All^SeeAll^", More:"^More^More^More^", TouchUINotSupported:"^TouchUINotSupported^Touch UI is not supported in this browser.^TouchUINotSupported^", ShowingItemsInfo:"^ShowingItemsInfo^Showing {0} items.^ShowingItemsInfo^", FilterByField:"^FilterByField^Select a field to apply a filter to <b>{0}<\/b>.^FilterByField^", Apply:"^Apply^Apply^Apply^", FilterByOptions:"^FilterByOptions^Select one or more options in the list below and press <b>{2}<\/b> to filter <b>{0}<\/b> by the field <b>{1}<\/b>.^FilterByOptions^", Suggestions:"^Suggestions^Suggestions^Suggestions^", UnSelect:"^UnSelect^Unselect^UnSelect^", AdvancedSearch:"^AdvancedSearch^Advanced Search^AdvancedSearch^", QuickFindScope:"^QuickFindScope^Search in...^QuickFindScope^", AddMatchingGroup:"^AddMatchingGroup^Add matching group^AddMatchingGroup^", MatchAll:"^MatchAll^Match all conditions^MatchAll^", MatchAny:"^MatchAny^Match any conditions^MatchAny^", DoNotMatchAll:"^DoNotMatchAll^Do not match all conditions^DoNotMatchAll^", DoNotMatchAny:"^DoNotMatchAny^Do not match any conditions^DoNotMatchAny^", MatchAllPastTense:"^MatchAllPastTense^Matched all conditions^MatchAllPastTense^", MatchAnyPastTense:"^MatchAnyPastTense^Matched any conditions^MatchAnyPastTense^", DoNotMatchAllPastTense:"^DoNotMatchAllPastTense^Did not match all conditions^DoNotMatchAllPastTense^", DoNotMatchAnyPastTense:"^DoNotMatchAnyPastTense^Did not match any conditions^DoNotMatchAnyPastTense^", In:"^In^in^In^", Recent:"^Recent^Recent^Recent^", Matched:"^Matched^Matched^Matched^", DidNotMatch:"^DidNotMatch^Did not match^DidNotMatch^", ClearFilter:"^ClearFilter2^Clear Filter^ClearFilter2^", ResetSearchConfirm:"Reset search conditions?", AdvancedSearchInstruction:"^AdvancedSearchInstruction^Enter conditions that must be matched and press search button.^AdvancedSearchInstruction^", Group:"^Group^Group^Group^", GroupedBy:"^GroupedBy^Grouped by^GroupedBy^", GroupByField:"^GroupByField^Select a field to group <b>{0}<\/b>.^GroupByField^", None:"^TransitionNone^None^TransitionNone^", Next:"^Next2^Next^Next2^", Prev:"^Prev2^Prev^Prev2^", DisplayDensity: {
            Label:"^DisplayDensity^Display Density^DisplayDensity^", List: {
                Condensed: "^Condensed^Condensed^Condensed^", Compact: "^Compact^Compact^Compact^", Comfortable: "^Comfortable^Comfortable^Comfortable^"
            }
        }
        , Files: {
            KB: "^FilesKB^KB^FilesKB^", Bytes: "^FilesBytes^bytes^FilesBytes^", Drop: "^FilesDrop^Drop a file here^FilesDrop^", DropMany: "^FilesDropMany^Drop files here^FilesDropMany^", Tap: "^FilesTap^Tap to select a file^FilesTap^", TapMany: "^FilesTapMany^Tap to select files^FilesTapMany^", Click: "^FilesClick^Click to select a file^FilesClick^", ClickMany: "^FilesClickMany^Click to select files^FilesClickMany^", Clear: "^FilesClear^Clear^FilesClear^", ClearConfirm: "^FilesClearConfirm^Clear?^FilesClearConfirm^", Sign: "^Sign^Sign here^Sign^"
        }
        , Themes: {
            Label:"^Theme^Theme^Theme^", List: {
                Light: "^LightTheme^Light^LightTheme^", Dark: "^DarkTheme^Dark^DarkTheme^", Aquarium: "^Aquarium^Aquarium^Aquarium^", Azure: "^Azure^Azure^Azure^", Belltown: "^Belltown^Belltown^Belltown^", Berry: "^Berry^Berry^Berry^", Bittersweet: "^Bittersweet^Bittersweet^Bittersweet^", Cay: "^Cay^Cay^Cay^", Citrus: "^Citrus^Citrus^Citrus^", Classic: "^Classic^Classic^Classic^", Construct: "^Construct^Construct^Construct^", Convention: "^Convention^Convention^Convention^", DarkKnight: "^DarkKnight^Dark Knight^DarkKnight^", Felt: "^Felt^Felt^Felt^", Graham: "^Graham^Graham^Graham^", Granite: "^Granite^Granite^Granite^", Grapello: "^Grapello^Grapello^Grapello^", Gravity: "^Gravity^Gravity^Gravity^", Lacquer: "^Lacquer^Lacquer^Lacquer^", Laminate: "^Laminate^Laminate^Laminate^", Lichen: "^Lichen^Lichen^Lichen^", Mission: "^Mission^Mission^Mission^", Modern: "^Modern^Modern^Modern^", ModernRose: "^ModernRose^Modern Rose^ModernRose^", Municipal: "^Municipal^Municipal^Municipal^", Petal: "^Petal^Petal^Petal^", Pinnate: "^Pinnate^Pinnate^Pinnate^", Plastic: "^Plastic^Plastic^Plastic^", Ricasso: "^Ricasso^Ricasso^Ricasso^", Simple: "^Simple^Simple^Simple^", Social: "^Social^Social^Social^", Summer: "^Summer^Summer^Summer^", Vantage: "^Vantage^Vantage^Vantage^", Verdant: "^Verdant^Verdant^Verdant^", Viewpoint: "^Viewpoint^Viewpoint^Viewpoint^", WhiteSmoke: "^WhiteSmoke^White Smoke^WhiteSmoke^", Yoshi: "^Yoshi^Yoshi^Yoshi^"
            }
        }
        , Transitions: {
            Label:"^Transitions^Transitions^Transitions^", List: {
                none: "^TransitionNone^None^TransitionNone^", slide: "^TransitionSlide^Slide^TransitionSlide^", fade: "^TransitionFade^Fade^TransitionFade^", pop: "^TransitionPop^Pop^TransitionPop^", flip: "^TransitionFlip^Flip^TransitionFlip^", turn: "^TransitionTurn^Turn^TransitionTurn^", flow: "^TransitionFlow^Flow^TransitionFlow^", slideup: "^TransitionSlideUp^Slide Up^TransitionSlideUp^", slidedown: "^TransitionSlideDown^Slide Down^TransitionSlideDown^"
            }
        }
        , LabelsInList: {
            Label:"Labels In List", List: {
                DisplayedAbove: "^DisplayedAbove^Displayed Above^DisplayedAbove^", DisplayedBelow: "^DisplayedBelow^Displayed Below^DisplayedBelow^"
            }
        }
        , LabelsInForm: {
            Label:"Labels In Form", List: {
                AlignedLeft: "^AlignedLeft^Aligned Left^AlignedLeft^", AlignedRight: "^AlignedRight^Aligned Right^AlignedRight^"
            }
        }
        , InitialListMode: {
            Label:"^InitialListMode^Initial List Mode^InitialListMode^", List: {
                SeeAll: "^SeeAll^See All^SeeAll^", Summary: "^Summary^Summary^Summary^"
            }
        }
    }
    ;
    n.Presenters= {
        Charts: {
            Text:"^Charts^Charts^Charts^", DataWarning:"^DataWarning^The maximum number of items to process is {0:d}. Please apply a filter to reduce the number of items.^DataWarning^", ShowData:"^ShowData^Show Data^ShowData^", ShowChart:"^ShowChart^Show Chart^ShowChart^", Sizes: {
                Label: "^SizeLabel^Size^SizeLabel^", Small: "^Small^Small^Small^", Medium: "^Medium^Medium^Medium^", Large: "^Large^Large^Large^"
            }
            , ChartLabels: {
                By: "^By^by^By^", Top: "^Top^top^Top^", Other: "^Other^Other^Other^", Blank: "^Blank^Blank^Blank^", GrandTotals: "^GrandTotals^Grand Totals^GrandTotals^", CountOf: "^CountOf^Count of^CountOf^", SumOf: "^SumOf^Sum of^SumOf^", AvgOf: "^AverageOf^Average of^AverageOf^", MinOf: "^MinimumOf^Minimum of^MinimumOf^", MaxOf: "^MaximumOf^Maximum of^MaximumOf^", Quarter: "^Quarter^Quarter^Quarter^", Week: "^Week^Week^Week^"
            }
        }
        , Calendar: {
            Text: "^Calendar^Calendar^Calendar^", Today: "^Today^Today^Today^", Noon: "^Noon^Noon^Noon^", Year: "^Year^Year^Year^", Month: "^Month^Month^Month^", Week: "^Week^Week^Week^", Day: "^Day^Day^Day^", Agenda: "^Agenda^Agenda^Agenda^", Sync: "^Sync^Sync^Sync^", Less: "^Less^Less^Less^"
        }
    }
    ;
    i=Web.MembershipResources= {}
    ;
    i.Bar= {
        LoginLink:"^LoginLink^Login^LoginLink^", LoginText:" ^ToThisWebsite^to this website^ToThisWebsite^", HelpLink:"^Help^Help^Help^", UserName:"^UserName^User Name^UserName^:", Password:"^Password^Password^Password^:", RememberMe:"^RememberMe^Remember me next time^RememberMe^", ForgotPassword:"^ForgotYourPassword^Forgot your password?^ForgotYourPassword^", SignUp:"^SignUpNow^Sign up now^SignUpNow^", LoginButton:"^LoginButton^Login^LoginButton^", MyAccount:"^MyAccount^My Account^MyAccount^", LogoutLink:"^Logout^Logout^Logout^", HelpCloseButton:"^HelpClose^Close^HelpClose^", HelpFullScreenButton:"^HelpFullScreen^Full Screen^HelpFullScreen^", UserIdle:"^IdleUser^Are you still there? Please login again.^IdleUser^", History:"^History^History^History^", Permalink:"^Permalink^Permalink^Permalink^", AddToFavorites:"^AddToFavorites^Add to Favorites^AddToFavorites^", RotateHistory:"^Rotate^Rotate^Rotate^", Welcome:"^Welcome1^Welcome^Welcome1^ <b>{0}<\/b>, ^Welcome2^Today is^Welcome2^ {1:D}", ChangeLanguageToolTip: "^ChangeYourLanguage^Change your language^ChangeYourLanguage^", PermalinkToolTip: "^PermalinkToolTip^Create a permanent link for selected record^PermalinkToolTip^", HistoryToolTip: "^HistoryToolTip^View history of previously selected records^HistoryToolTip^", AutoDetectLanguageOption: "Auto Detect"
    }
    ;
    i.Messages= {
        InvalidUserNameAndPassword: "^InvalidUserNameAndPassword^Your user name and password are not valid.^InvalidUserNameAndPassword^", BlankUserName: "^BlankUserName^User name cannot be blank.^BlankUserName^", BlankPassword: "^BlankPassword^Password cannot be blank.^BlankPassword^", PermalinkUnavailable: "^PermalinkUnavailable^Permalink is not available. Please select a record.^PermalinkUnavailable^", HistoryUnavailable: "^HistoryUnavailable^History is not available.^HistoryUnavailable^"
    }
    ;
    i.Manager= {
        UsersTab: "^UsersTab^Users^UsersTab^", RolesTab: "^RolesTab^Roles^RolesTab^", UsersInRole: "^UsersInRole^Users in Role^UsersInRole^"
    }
    ;
    typeof Sys!="undefined"&&Sys.Application.notifyScriptLoaded()
}

)();