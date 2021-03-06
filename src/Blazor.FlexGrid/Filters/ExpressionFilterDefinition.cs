﻿using System;

namespace Blazor.FlexGrid.Filters
{
    public class ExpressionFilterDefinition : IFilterDefinition
    {
        public string ColumnName { get; }

        public object Value { get; }

        public FilterOperation FilterOperation { get; }

        public ExpressionFilterDefinition(string columnName, FilterOperation filterOperation, object value)
        {
            ColumnName = string.IsNullOrWhiteSpace(columnName)
                ? throw new ArgumentNullException(nameof(columnName))
                : columnName;

            FilterOperation = filterOperation == FilterOperation.None
                ? throw new ArgumentNullException(nameof(filterOperation))
                : filterOperation;

            Value = value ?? throw new ArgumentNullException(nameof(value));
        }
    }
}
